"use client"
import { Button } from "@/components/ui/button";
import { IconLibrary } from "@/data/icon-libraries";
import { iconLibraries } from "@/data/icon-libraries";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { SidebarSkeleton } from "./sidebar-skeleton";
import { useRouter } from "next/navigation";
import useFetchNavItems from "@/hooks/fetchNavItems";


export function Sidebar() {
  const { navItems, loading, selectedCategory, setSelectedCategory } = useFetchNavItems()
  const router = useRouter()
  const handleRedirect = (e: React.MouseEvent<HTMLButtonElement>,library: IconLibrary) => {
    e.preventDefault()

    setSelectedCategory(library)
    router.push(`/${library}`)
  }


  if (loading) {
    return <SidebarSkeleton />;
  }

  return (
    <div className="w-full md:w-[240px] flex-shrink-0 md:border-r mx-4">
    <ScrollArea className="h-[calc(100vh-3.5rem)] overflow-y-auto py-6 md:py-0">
      <div className="space-y-1 py-4 pr-4">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start",
            !selectedCategory && "bg-accent"
          )}
          onClick={(e) => {e.preventDefault(); setSelectedCategory(null); router.push('/')}}
        >
          Home
        </Button>
        {navItems?.sort((a: string, b: string) => a.localeCompare(b)).map((item: string, index: number) => {
          const libraryName = iconLibraries[item as IconLibrary]
          if(!libraryName) return null
          return(

            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                selectedCategory === item && "bg-accent"
              )}
              onClick={(e) => handleRedirect(e,item as IconLibrary)}
            >
              {iconLibraries[item as IconLibrary]}
            </Button>
          )
        })}
      </div>
    </ScrollArea>
  </div>
  );
} 