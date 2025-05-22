import { JobCard } from "@/components/job-card";
import { JobFilters } from "@/components/job-filters";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { esClient } from "@/elasticsearch/client";
import { JobPosting } from "@/types/job";
import { Briefcase, ChevronRight } from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { searchJobs } from "./actions";
import type { JobFilters as JobFiltersType } from "@/types/job";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SortResults } from "@/components/sort";
import { Pagination } from "@/components/pagination";

async function topJobTitles() {
  const response = await esClient.search({
    index: "jobs",
    size: 0,
    aggregations: {
      top_job_titles: {
        terms: {
          field: "title.keyword",
          size: 5,
        },
      },
    },
  });

  return response.aggregations;
}

async function countAllJobs() {
  const result: any = await esClient.search({
    index: "jobs",
    size: 0,
    aggs: {
      total_jobs: {
        value_count: { field: "title.keyword" },
      },
      unique_companies: {
        cardinality: { field: "company.keyword" },
      },
    },
  });

  const total = result.aggregations?.total_jobs.value;
  const unique = result.aggregations?.unique_companies.value;

  return { total, unique };
}

export default async function Home({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<JobFiltersType>;
}) {
  const searchParams = await searchParamsPromise;
  const filters: JobFiltersType = {
    query: searchParams.query || "",
    remote: searchParams.remote as any,
    job_type: searchParams.job_type as any,
    industry: searchParams.industry,
    experience_level: searchParams.experience_level as any,
    page:
      typeof searchParams.page === "string"
        ? parseInt(searchParams.page) || 1
        : 1,
    sort:
      typeof searchParams.sort === "string"
        ? (searchParams.sort as "relevance" | "date" | "salary")
        : "relevance",
  };

  const { jobs, facets, total } = await searchJobs(filters);
  const topJobTitlesData = await topJobTitles();
  const { total: allJobsCount, unique } = await countAllJobs();

  const page = filters.page || 1;
  const pageSize = 20;

  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, total);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Find Your <span className="text-purple-500">Dream Job</span> Today
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Discover thousands of job opportunities with all the information you
            need. Find your dream job with JobSphere.
          </p>

          {/* Search Bar */}
          <SearchBar />

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Popular searches:</span>

            {(topJobTitlesData?.top_job_titles as any).buckets.map(
              (job: any) => (
                <Link
                  key={job.key}
                  href={`/?query=${job.key}`}
                  className="hover:text-purple-400"
                >
                  {job.key} ({job.doc_count})
                </Link>
              )
            )}
          </div>
        </div>
      </section>
      {/* Job Listings Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <Button
              variant="link"
              className="text-purple-400 hover:text-purple-300"
            >
              View all jobs <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="hidden lg:block">
              <JobFilters facets={facets} />
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <p className="text-sm text-gray-300">
                  Showing{" "}
                  <span className="font-medium">
                    {start}-{end}
                  </span>{" "}
                  of <span className="font-medium">{total}</span> jobs
                </p>
                <SortResults />
              </div>

              <div className="space-y-6">
                {jobs.map((job) => (
                  <JobCard
                    key={job._id}
                    title={job.title}
                    company={job.company}
                    location={job.remote}
                    type={job.job_type}
                    salary={`$${job.salary.min} - $${job.salary.max}`}
                    description={job.description}
                    tags={job.tags}
                    posted={formatDistanceToNow(new Date(job.posted_at))}
                  />
                ))}
              </div>

              <div className="mt-8 flex justify-center">
                <Pagination page={page} total={total} to={end} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-500">
                {allJobsCount.toLocaleString()}+
              </div>
              <p className="text-gray-300">Active Job Listings</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-500">
                {unique.toLocaleString()}+
              </div>
              <p className="text-gray-300">Companies Hiring</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
