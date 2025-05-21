import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Bookmark, Building2, Clock, MapPin } from "lucide-react"

interface JobCardProps {
  title: string
  company: string
  location: string
  type: string
  salary: string
  description: string
  tags: string[]
  posted: string
}

export function JobCard({ title, company, location, type, salary, description, tags, posted }: JobCardProps) {
  return (
    <Card className="overflow-hidden border-gray-800 bg-gray-800/50 transition-all hover:border-purple-500/50 hover:shadow-md hover:shadow-purple-500/10">
      <CardHeader className="border-b border-gray-700 bg-gray-800 p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Building2 className="h-4 w-4" />
                <span>{company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{posted}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
            <Bookmark className="h-5 w-5" />
            <span className="sr-only">Save job</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            {type}
          </Badge>
          <span className="font-medium text-green-400">{salary}</span>
        </div>
        <p className="text-sm text-gray-300">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-700 hover:bg-gray-600">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-gray-700 bg-gray-800/50 p-4">
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-between">
          <Button className="bg-purple-600 hover:bg-purple-700">Apply Now</Button>
          <Button variant="outline" className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-700">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
