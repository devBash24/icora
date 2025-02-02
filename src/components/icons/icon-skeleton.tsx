export function IconSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="h-24 border rounded-lg p-4 space-y-3 animate-pulse"
        >
          <div className="w-8 h-8 bg-muted rounded mx-auto" />
          <div className="h-2 bg-muted rounded w-16 mx-auto" />
        </div>
      ))}
    </div>
  );
} 