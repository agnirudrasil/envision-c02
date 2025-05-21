import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function JobFilters() {
  return (
    <div className="rounded-lg border border-gray-800 bg-gray-900 p-4">
      <h3 className="mb-4 font-semibold">Filter Jobs</h3>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="job-type" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <Label htmlFor="full-time" className="text-sm font-normal">
                  Full-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <Label htmlFor="part-time" className="text-sm font-normal">
                  Part-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract" className="text-sm font-normal">
                  Contract
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship" className="text-sm font-normal">
                  Internship
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry" />
                <Label htmlFor="entry" className="text-sm font-normal">
                  Entry Level
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid" />
                <Label htmlFor="mid" className="text-sm font-normal">
                  Mid Level
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior" />
                <Label htmlFor="senior" className="text-sm font-normal">
                  Senior Level
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="executive" />
                <Label htmlFor="executive" className="text-sm font-normal">
                  Executive
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-xs text-gray-400">$30k</span>
                <span className="text-xs text-gray-400">$200k+</span>
              </div>
              <Slider defaultValue={[30, 150]} min={30} max={200} step={10} />
              <div className="flex justify-between">
                <span className="text-sm">$30,000 - $150,000</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote" className="text-sm font-normal">
                  Remote
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <Label htmlFor="hybrid" className="text-sm font-normal">
                  Hybrid
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="onsite" />
                <Label htmlFor="onsite" className="text-sm font-normal">
                  On-site
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date-posted" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">Date Posted</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="24h" />
                <Label htmlFor="24h" className="text-sm font-normal">
                  Last 24 hours
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="7d" />
                <Label htmlFor="7d" className="text-sm font-normal">
                  Last 7 days
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="14d" />
                <Label htmlFor="14d" className="text-sm font-normal">
                  Last 14 days
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="30d" />
                <Label htmlFor="30d" className="text-sm font-normal">
                  Last 30 days
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="industry" className="border-gray-800">
          <AccordionTrigger className="py-3 text-sm hover:text-purple-400">Industry</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="tech" />
                <Label htmlFor="tech" className="text-sm font-normal">
                  Technology
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="healthcare" />
                <Label htmlFor="healthcare" className="text-sm font-normal">
                  Healthcare
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="finance" />
                <Label htmlFor="finance" className="text-sm font-normal">
                  Finance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="education" />
                <Label htmlFor="education" className="text-sm font-normal">
                  Education
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="retail" />
                <Label htmlFor="retail" className="text-sm font-normal">
                  Retail
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6 space-y-2">
        <Button className="w-full bg-purple-600 hover:bg-purple-700">Apply Filters</Button>
        <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
          Reset Filters
        </Button>
      </div>
    </div>
  )
}
