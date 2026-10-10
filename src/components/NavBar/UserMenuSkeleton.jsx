// components/UserMenuSkeleton.jsx
export default function UserMenuSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
      <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
    </div>
  );
}