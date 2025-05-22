"use server";

import { esClient } from "@/elasticsearch/client";
import { JobPosting, JobFilters } from "@/types/job";
import { subDays } from "date-fns";

const convertArray = (value: string | string[] | undefined) => {
  return Array.isArray(value) ? value : [value];
};

export async function searchJobs(filters: JobFilters) {
  const must: any[] = [];

  if (filters.query) {
    must.push({
      multi_match: {
        query: filters.query,
        fields: ["title^3", "description", "company^2"], // Boost title & company
        type: "best_fields",
        operator: "and",
      },
    });
  }

  if (filters.remote?.length) {
    must.push({ terms: { remote: convertArray(filters.remote) } });
  }

  if (filters.job_type?.length) {
    must.push({ terms: { job_type: convertArray(filters.job_type) } });
  }

  if (filters.experience_level?.length) {
    must.push({
      terms: { experience_level: convertArray(filters.experience_level) },
    });
  }

  if (filters.industry?.length) {
    must.push({ terms: { industry: convertArray(filters.industry) } });
  }

  const size = 20;
  const from = (filters.page! - 1) * size;

  if (filters.date_posted) {
    const now = new Date();
    const cutoff = subDays(now, Number(filters.date_posted));
    must.push({
      range: {
        posted_at: { gte: cutoff.toISOString() },
      },
    });
  }

  if (filters.salary_min) {
    must.push({ range: { "salary.min": { gte: filters.salary_min } } });
  }

  if (filters.salary_max) {
    must.push({ range: { "salary.max": { lte: filters.salary_max } } });
  }

  let sortClause = [];

  if (filters.sort === "date") {
    sortClause.push({ posted_at: "desc" });
  } else if (filters.sort === "salary") {
    sortClause.push({ "salary.max": "desc" });
  }

  const result = await esClient.search({
    index: "jobs",
    size,
    from,
    query: {
      bool: { must },
    },
    ...(sortClause.length ? { sort: sortClause } : {}),
    aggs: {
      job_type: { terms: { field: "job_type" } },
      remote: { terms: { field: "remote" } },
      experience_level: { terms: { field: "experience_level" } },
      industry: { terms: { field: "industry" } },
      date_posted: {
        date_range: {
          field: "posted_at",
          format: "yyyy-MM-dd",
          ranges: [
            { key: "24h", from: "now-1d/d" },
            { key: "7d", from: "now-7d/d" },
            { key: "30d", from: "now-30d/d" },
          ],
        },
      },
      salary_ranges: {
        range: {
          field: "salary.min",
          ranges: [
            { to: 30000 },
            { from: 30000, to: 60000 },
            { from: 60000, to: 100000 },
            { from: 100000 },
          ],
        },
      },
      salary_min: { stats: { field: "salary.min" } },
      salary_max: { stats: { field: "salary.max" } },
      locations: {
        terms: {
          field: "location.keyword",
          size: 10,
        },
      },
    },
  });

  const jobs = result.hits.hits.map((hit: any) => ({
    ...hit._source,
    _id: hit._id,
  }));
  const facets = result.aggregations;
  const total = (result.hits.total as any)?.value ?? 0;

  return { jobs, facets, total };
}
