import IconLibraryPage from "@/components/icons/renderIconLibrary.tsx";
import { Suspense } from "react";
import { IconSkeleton } from "@/components/icons/icon-skeleton";
export default async function LibraryPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/icons/all/libraries/${params.id}`
  );
  const data = response.json();
  return (
    <Suspense
      fallback={
        <div className="container py-6">
          <div className="space-y-8">
            <div className="h-8 w-48 bg-muted rounded animate-pulse" />
            <IconSkeleton />
          </div>
        </div>
      }
    >
      <IconLibraryPage data={data} />
    </Suspense>
  );
}
