export function SidebarSkeleton() {
  return (
    <div className="w-[200px] flex-shrink-0 border-r">
      <div className="space-y-1 p-4">
        <div className="h-10 rounded-md bg-muted animate-pulse mb-2" />
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="h-10 rounded-md bg-muted animate-pulse"
          />
        ))}
      </div>
    </div>
  );
} 