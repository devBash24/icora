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

  // Updated column counts for better mobile display
  const getColumnsCount = () => {
    if (typeof window === 'undefined') return 4;
    const width = window.innerWidth;
    if (width < 480) return 2; // xs
    if (width < 640) return 3; // sm
    if (width < 768) return 3; // md
    if (width < 1024) return 4; // lg
    return 6;
  };

  const columns = getColumnsCount();
  const rows = Math.ceil(icons.length / columns);

  return (
    <Virtuoso
      style={{ height: 'calc(100vh - 180px)' }}
      totalCount={rows}
      itemContent={index => {
        const rowItems = icons.slice(index * columns, (index + 1) * columns);
        return (
          <div className="w-full flex flex-wrap justify-start items-start gap-2 sm:gap-4 mb-4">
            {icons.map((icon) => (
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
                    className="h-20 sm:h-24 w-[8rem] max-sm:w-full flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-4"
                    onClick={() => handleIconClick(icon)}
                  >
                    <IconRenderer iconData={icon.content} className="w-6 h-6 sm:w-8 sm:h-8" />
                    <span className="text-[10px] sm:text-xs text-muted-foreground truncate w-full text-center">
                      {icon.name}
                    </span>
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
    />
  );
} 