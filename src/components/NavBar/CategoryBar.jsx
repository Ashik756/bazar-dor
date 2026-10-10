// components/CategoryBar.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryBar({ categories }) {
  const pathname = usePathname();

  return (
    <div className="border-t border-gray-200 bg-white">
      <ul className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-4 py-2.5 [scrollbar-width:none]">
        {categories.map((cat) => {
          const href = `/category/${cat.slug}`;
          const active = pathname === href;
          return (
            <li key={cat.id} className="shrink-0">
              <Link
                href={href}
                className={`flex items-center gap-1.5 text-sm transition-colors ${
                  active
                    ? "font-semibold text-green-700"
                    : "text-gray-600 hover:text-green-700"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.nameBn}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}