// components/Navbar.jsx
import { Suspense } from "react";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import TodayDate from "./TodayDate";
import CategoryBar from "./CategoryBar";
import UserMenuServer from "./UserMenuServer";
import UserMenuSkeleton from "./UserMenuSkeleton";

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600 text-white">
            🛒
          </div>
          <div className="leading-tight">
            <h1 className="text-lg font-bold">বাজার দর</h1>
            <TodayDate className="text-xs text-gray-500" />
          </div>
        </Link>

        <Suspense fallback={<UserMenuSkeleton />}>
          <UserMenuServer />
        </Suspense>
      </div>

      <CategoryBar categories={categories} />
    </header>
  );
}