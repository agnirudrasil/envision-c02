// types/job.ts
export interface SalaryRange {
  min: number;
  max: number;
}

export type RemoteType = "remote" | "hybrid" | "onsite";
export type JobType = "full-time" | "part-time" | "internship" | "contract";
export type ExperienceLevel = "entry" | "mid" | "senior";

export interface JobFilters {
  query?: string;
  remote?: string[];
  job_type?: string[];
  industry?: string[];
  experience_level?: string[];
  date_posted?: string;
  salary_min?: number;
  salary_max?: number;
  location?: string;
  sort?: "relevance" | "date" | "salary";
  page?: number;
}

export interface JobPosting {
  _id: string;
  title: string;
  company: string;
  remote: RemoteType;
  job_type: JobType;
  description: string;
  posted_at: string;
  tags: string[];
  industry: string;
  experience_level: ExperienceLevel;
  salary: SalaryRange;
}
