"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useTransition } from "react";

export function CheckboxFacet({
  name,
  options,
}: {
  name: string;
  options: any[];
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function toggleFacet(key: string) {
    const current = new Set(searchParams.getAll(name));
    if (current.has(key)) {
      current.delete(key);
    } else {
      current.add(key);
    }
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete(name);
    current.forEach((value) => newParams.append(name, value));
    startTransition(() =>
      router.push(`?${newParams.toString()}`, { scroll: false })
    );
  }

  return (
    <div className="space-y-2">
      {options
        .filter((option) => option.doc_count > 0)
        .map((option) => (
          <div key={option.key} className="flex items-center space-x-2">
            <Checkbox
              id={`${name}-${option.key}`}
              checked={searchParams.getAll(name).includes(option.key)}
              onCheckedChange={() => toggleFacet(option.key)}
            />
            <Label htmlFor={`${name}-${option.key}`}>
              {option.key} ({option.doc_count})
            </Label>
          </div>
        ))}
    </div>
  );
}
