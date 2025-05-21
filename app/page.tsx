import { JobCard } from "@/components/job-card"
import { JobFilters } from "@/components/job-filters"
import { SearchBar } from "@/components/search-bar"
import { Button } from "@/components/ui/button"
import { Briefcase, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-purple-500" />
            <span className="text-xl font-bold">JobSphere</span>
          </div>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#" className="text-sm font-medium hover:text-purple-400">
              Find Jobs
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400">
              Companies
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400">
              Career Advice
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-purple-400">
              Salary Guide
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden text-sm font-medium hover:text-purple-400 md:inline-block">
              Sign In
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">Post a Job</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Find Your <span className="text-purple-500">Dream Job</span> Today
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
            Discover thousands of job opportunities with all the information you need. Find your dream job with
            JobSphere.
          </p>

          {/* Search Bar */}
          <SearchBar />

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>Popular searches:</span>
            <Link href="#" className="hover:text-purple-400">
              Software Engineer
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Data Scientist
            </Link>
            <Link href="#" className="hover:text-purple-400">
              Product Manager
            </Link>
            <Link href="#" className="hover:text-purple-400">
              UX Designer
            </Link>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <Button variant="link" className="text-purple-400 hover:text-purple-300">
              View all jobs <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Filters Sidebar */}
            <div className="hidden lg:block">
              <JobFilters />
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between rounded-lg bg-gray-800 p-4">
                <p className="text-sm text-gray-300">
                  Showing <span className="font-medium">1-10</span> of <span className="font-medium">1,234</span> jobs
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-300">Sort by:</span>
                  <select className="rounded-md border border-gray-700 bg-gray-800 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500">
                    <option>Relevance</option>
                    <option>Date posted</option>
                    <option>Salary</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                <JobCard
                  title="Senior Frontend Developer"
                  company="TechCorp Inc."
                  location="San Francisco, CA"
                  type="Full-time"
                  salary="$120,000 - $150,000"
                  description="We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces using React and TypeScript."
                  tags={["React", "TypeScript", "Redux", "Tailwind CSS"]}
                  posted="2 days ago"
                />

                <JobCard
                  title="Data Scientist"
                  company="Analytics Pro"
                  location="Remote"
                  type="Full-time"
                  salary="$110,000 - $140,000"
                  description="Join our data science team to develop machine learning models and analyze large datasets to drive business decisions."
                  tags={["Python", "Machine Learning", "SQL", "Data Visualization"]}
                  posted="1 day ago"
                />

                <JobCard
                  title="UX/UI Designer"
                  company="Creative Solutions"
                  location="New York, NY"
                  type="Full-time"
                  salary="$90,000 - $120,000"
                  description="Design beautiful and intuitive user interfaces for web and mobile applications. Work closely with product and development teams."
                  tags={["Figma", "Adobe XD", "Prototyping", "User Research"]}
                  posted="3 days ago"
                />

                <JobCard
                  title="DevOps Engineer"
                  company="Cloud Systems"
                  location="Austin, TX"
                  type="Full-time"
                  salary="$130,000 - $160,000"
                  description="Implement and manage CI/CD pipelines, infrastructure as code, and cloud resources to support our growing platform."
                  tags={["AWS", "Kubernetes", "Docker", "Terraform"]}
                  posted="Just now"
                />

                <JobCard
                  title="Product Manager"
                  company="Innovate Inc."
                  location="Seattle, WA"
                  type="Full-time"
                  salary="$125,000 - $155,000"
                  description="Lead product development from conception to launch. Work with cross-functional teams to deliver exceptional user experiences."
                  tags={["Product Strategy", "Agile", "User Stories", "Roadmapping"]}
                  posted="1 week ago"
                />
              </div>

              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700">
                  Load more jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-500">10,000+</div>
              <p className="text-gray-300">Active Job Listings</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-500">5,000+</div>
              <p className="text-gray-300">Companies Hiring</p>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 p-6 text-center">
              <div className="mb-2 text-3xl font-bold text-purple-500">1M+</div>
              <p className="text-gray-300">Job Seekers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">JobSphere</span>
              </div>
              <p className="mb-4 text-sm text-gray-400">
                Connecting talented professionals with the world's best companies.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">For Job Seekers</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Resume Builder
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Salary Calculator
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">For Employers</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Talent Search
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Employer Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-400">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} JobSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
