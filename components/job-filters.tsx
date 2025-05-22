"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CheckboxFacet } from "./checkbox-facet";
import { useRouter } from "next/navigation";

export function JobFilters({ facets }: { facets: any }) {
  const router = useRouter();

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
      <h3 className="mb-4 font-semibold">Filter Jobs</h3>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="job-type" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">
            Job Type
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <CheckboxFacet
                name="job_type"
                options={facets.job_type.buckets}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">
            Experience Level
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <CheckboxFacet
                name="experience_level"
                options={facets.experience_level.buckets}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">
            Salary Range
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">
                  ${(facets.salary_min.max / 1000).toFixed(0)}k
                </span>
                <span className="text-xs text-gray-400">
                  ${(facets.salary_max.max / 1000).toFixed(0)}k+
                </span>
              </div>
              <Slider
                min={facets.salary_min.max / 1000}
                max={facets.salary_max.max / 1000}
                step={10}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">
            Remote Type
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <CheckboxFacet name="remote" options={facets.remote.buckets} />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date-posted" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">
            Date Posted
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <CheckboxFacet
                name="date_posted"
                options={facets.date_posted.buckets}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="industry" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">
            Industry
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <CheckboxFacet
                name="industry"
                options={facets.industry.buckets}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <Button
          onClick={() => {
            router.push("/");
          }}
          variant="outline"
          className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
