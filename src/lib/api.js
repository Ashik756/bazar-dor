// lib/api.js
import { cacheLife } from "next/cache";

export async function getCategories() {
  "use cache";
  cacheLife("hours");

  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories"
  );
  if (!res.ok) return [];
  const json = await res.json();
  return Array.isArray(json) ? json : json.data ?? [];
}