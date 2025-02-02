import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/icons/render";
import { IconDialog } from "./icon-dialog";
import { useState } from "react";
import { Virtuoso } from 'react-virtuoso';

interface IconGridProps {
  icons: any[];
  pathname: string;
  setSelectedIcon: (icon: any) => void;
}

export function IconGrid({ icons, pathname, setSelectedIcon }: IconGridProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedIconData, setSelectedIconData] = useState<any>(null);

  const handleIconClick = (icon: any) => {
    setSelectedIconData(icon);
    setSelectedIcon(icon);
    setIsDialogOpen(true);
  };

  // Calculate number of columns based on screen width
  const getColumnsCount = () => {
    if (typeof window === 'undefined') return 6;
    const width = window.innerWidth;
    if (width < 640) return 2; // sm
    if (width < 768) return 3; // md
    if (width < 1024) return 4; // lg
    return 6;
  };

  const columns = getColumnsCount();
  const rows = Math.ceil(icons.length / columns);

  return (
    <Virtuoso
      style={{ height: 'calc(100vh - 200px)' }}
      totalCount={rows}
      itemContent={index => {
        const rowItems = icons.slice(index * columns, (index + 1) * columns);
        
        return (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
            {rowItems.map((icon) => (
              <Dialog 
                key={icon.name} 
                
                open={isDialogOpen && selectedIconData?.name === icon.name}
                onOpenChange={(open) => {
                  setIsDialogOpen(open);
                  if (!open) setSelectedIconData(null);
                }}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-24 w-full flex flex-col items-center justify-center gap-2"
                    onClick={() => handleIconClick(icon)}
                  >
                    <IconRenderer iconData={icon.content} />
                    <span className="text-xs text-muted-foreground">{icon.name}</span>
                  </Button>
                </DialogTrigger>
                {selectedIconData && (
                  <IconDialog icon={selectedIconData} pathname={pathname} />
                )}
              </Dialog>
            ))}
          </div>
        );
      }}
      components={{
        ScrollSeekPlaceholder: () => (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
            {Array(columns).fill(0).map((_, i) => (
              <div 
                key={i}
                className="h-24 w-full bg-muted rounded-md animate-pulse"
              />
            ))}
          </div>
        ),
      }}
      scrollSeekConfiguration={{
        enter: velocity => Math.abs(velocity) > 500,
        exit: velocity => Math.abs(velocity) < 100,
      }}
    />
  );
} 