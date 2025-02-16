'use client'
import { iconLibraries, IconLibrary } from "@/data/icon-libraries";
import { usePathname } from "next/navigation";
import { IconGrid } from "./icon-grid";
import { useState } from "react";
import { use } from "react";
import { IconData } from "@/lib/types";

export default function IconLibraryPage({data}:{data:Promise<{data:IconData[]}>}) {
  const icons = use(data)
  const iconsList = Array.isArray(icons.data) ? (icons.data as IconData[]) : [];
  const pathname = usePathname().split('/')[1];
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);

  return (
    <div className="w-full flex flex-col min-h-screen h-full overflow-y-auto px-7">
      <main className="w-full flex-1 overflow-y-auto">
        <div className="w-full container py-6 px-8">
          <div className="w-full space-y-8">
            <h1 className="text-3xl font-bold capitalize">
              {iconLibraries[pathname as IconLibrary]}
            </h1>
              <IconGrid 
                icons={iconsList as IconData[]} 
                pathname={pathname}
                setSelectedIcon={setSelectedIcon}
              />
          </div>
        </div>
      </main>
    </div>

  );
}

