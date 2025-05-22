"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function Pagination({
  page,
  total,
  to,
}: {
  page: number;
  total: number;
  to: number;
}) {
  const searchParams = useSearchParams();
  const buildPageLink = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    return `/?${params.toString()}`;
  };

  return (
    <div className="flex justify-between w-full pt-4">
      {page > 1 && (
        <Button
          asChild
          variant="outline"
          className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700"
          disabled={page <= 1}
        >
          <Link href={buildPageLink(page - 1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Link>
        </Button>
      )}
      {to < total && (
        <Button
          asChild
          className="border-gray-700 ml-auto bg-gray-800 text-gray-300 hover:bg-gray-700"
          variant="outline"
          disabled={to >= total}
        >
          <Link href={buildPageLink(page + 1)}>
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
