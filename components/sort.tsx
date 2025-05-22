"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTransition } from "react";

export function SortResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function setSort(key: string) {
    const newParams = new URLSearchParams(searchParams.toString());
    if (key) newParams.set("sort", key);
    else newParams.delete("sort");
    startTransition(() => router.push(`?${newParams.toString()}`));
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-300 whitespace-nowrap">Sort by:</span>
      <Select
        onValueChange={setSort}
        defaultValue={searchParams.get("sort") ?? "relevance"}
      >
        <SelectTrigger>
          <SelectValue placeholder="Relevance" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Relevance</SelectItem>
          <SelectItem value="date">Date posted</SelectItem>
          <SelectItem value="salary">Salary</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
