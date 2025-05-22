"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import { useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function updateParam(key: string, value: string) {
    const newParams = new URLSearchParams(searchParams.toString());
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    startTransition(() =>
      router.push(`?${newParams.toString()}`, { scroll: false })
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative rounded-lg bg-gray-800 p-2 shadow-lg">
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              defaultValue={searchParams.get("query") || ""}
              type="text"
              placeholder="Job title, keywords, or company"
              className="h-12 border-gray-700 bg-gray-800 pl-10 text-gray-100 placeholder:text-gray-400 focus:border-purple-500 focus:ring-purple-500"
              onChange={(e) => updateParam("query", e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
