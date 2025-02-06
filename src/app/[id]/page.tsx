'use client';
import { IconSkeleton } from "@/components/icons/icon-skeleton";
import { IconLibrary, iconLibraries } from "@/data/icon-libraries";
import useFetchIconLibrary, { IconData } from "@/hooks/useFetchIconLibrary";
import { IconGrid } from "@/components/icons/icon-grid";
import { usePathname } from "next/navigation";

export default function LibraryPage() {
  const pathname = usePathname().split('/')[1];
  const { data: icons, isLoading, setSelectedIcon } = useFetchIconLibrary(pathname);

  return (
    <div className="w-full flex flex-col min-h-screen h-full overflow-y-auto px-7">
      <main className="w-full flex-1 overflow-y-auto">
        <div className="w-full container py-6 px-8">
          <div className="w-full space-y-8">
            <h1 className="text-3xl font-bold capitalize">
              {iconLibraries[pathname as IconLibrary]}
            </h1>
            
            {isLoading ? (
              <div className="container py-6">
                <div className="space-y-8">
                  <div className="h-8 w-48 bg-muted rounded animate-pulse" />
                  <IconSkeleton />
                </div>
              </div>
            ) : (
              <IconGrid 
                icons={icons as IconData[]} 
                pathname={pathname}
                setSelectedIcon={setSelectedIcon}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}