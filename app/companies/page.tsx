import { Button } from "@/components/ui/button";
import { esClient } from "@/elasticsearch/client";
import Link from "next/link";

const getAllCompanies = async () => {
  const result = await esClient.search({
    index: "jobs",
    size: 0,
    body: {
      aggs: {
        companies: {
          terms: {
            field: "company.keyword",
            size: 1000, // Adjust the size as needed
          },
        },
      },
    },
  });

  return (result.aggregations?.companies as any).buckets.map((bucket: any) => ({
    name: bucket.key,
    count: bucket.doc_count,
  }));
};

export default async function CompaniesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Companies</h1>
      <p className="mt-4 text-lg text-gray-600">
        Explore job postings from various companies.
      </p>

      <div className="mt-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold">Company List</h2>
        <ul className="mt-4 space-y-2">
          {await getAllCompanies().then((companies) =>
            companies.map((company: any) => (
              <li
                key={company.name}
                className="flex justify-between p-4 border-b"
              >
                <Button
                  asChild
                  variant="link"
                  className="justify-between w-full"
                >
                  <Link href={"/?query=" + company.name}>
                    <span>{company.name}</span>
                    <span className="text-gray-500">{company.count} jobs</span>
                  </Link>
                </Button>
              </li>
            ))
          )}
        </ul>
        <p className="mt-4 text-sm text-gray-500">
          Note: The number of jobs listed is based on the latest data from our
          database.
        </p>
      </div>
    </div>
  );
}
