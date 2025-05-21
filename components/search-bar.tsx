"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import { useState } from "react"

export function SearchBar() {
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative rounded-lg bg-gray-800 p-2 shadow-lg">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Job title, keywords, or company"
              className="h-12 border-gray-700 bg-gray-800 pl-10 text-gray-100 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Location or remote"
              className="h-12 border-gray-700 bg-gray-800 pl-10 text-gray-100 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          <Button className="h-12 bg-purple-600 px-8 hover:bg-purple-700">Search</Button>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="mt-2 flex w-full items-center justify-center text-sm text-gray-400 hover:text-purple-400 md:justify-start"
        >
          {showFilters ? "Hide advanced filters" : "Show advanced filters"}
        </button>

        {showFilters && (
          <div className="mt-4 grid grid-cols-1 gap-4 border-t border-gray-700 pt-4 md:grid-cols-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Job Type</label>
              <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option value="">Any Type</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Experience Level</label>
              <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option value="">Any Level</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
                <option value="executive">Executive</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Date Posted</label>
              <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option value="">Any Time</option>
                <option value="1">Last 24 hours</option>
                <option value="7">Last 7 days</option>
                <option value="14">Last 14 days</option>
                <option value="30">Last 30 days</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Salary Range</label>
              <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option value="">Any Salary</option>
                <option value="30-50">$30,000 - $50,000</option>
                <option value="50-80">$50,000 - $80,000</option>
                <option value="80-100">$80,000 - $100,000</option>
                <option value="100-150">$100,000 - $150,000</option>
                <option value="150+">$150,000+</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Industry</label>
              <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option value="">All Industries</option>
                <option value="tech">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="education">Education</option>
                <option value="retail">Retail</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-300">Remote Options</label>
              <select className="w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-gray-100 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                <option value="">Any</option>
                <option value="remote">Remote Only</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site Only</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
