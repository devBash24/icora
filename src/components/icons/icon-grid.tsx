"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import IconRenderer from "@/components/icons/render";
import { IconDialog } from "./icon-dialog";
import { useState, useEffect, useMemo } from "react";
import { Virtuoso } from "react-virtuoso";
import { useIconCart } from "@/context/iconCartProvider";
import { IconData } from "@/lib/types";
interface IconGridProps {
  icons: IconData[];
  pathname: string;
  setSelectedIcon: (icon: IconData) => void;
}

export function IconGrid({ icons, pathname, setSelectedIcon }: IconGridProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedIconData, setSelectedIconData] = useState<IconData | null>(
    null
  );
  const { addRemoveIcon, multiSelect, isInCart } = useIconCart();
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      setColumns(
        width < 480
          ? 2 // xs
          : width < 640
          ? 3
          : width < 768
          ? 3
          : width < 1024
          ? 4
          : 6
      );
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const rows = useMemo(
    () => Math.ceil(icons.length / columns),
    [icons, columns]
  );

  const handleIconClick = (icon: IconData) => {
    setSelectedIconData(icon);
    setSelectedIcon(icon);
    setIsDialogOpen(true);
  };

  return (
    <Virtuoso
      style={{ height: "calc(100vh - 180px)" }}
      totalCount={rows}
      itemContent={(index) => {
        const rowItems = icons.slice(index * columns, (index + 1) * columns);
        return (
          <div className="w-full flex flex-wrap justify-start items-start gap-2 sm:gap-4 mb-4">
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
                    className="h-20 sm:h-24 w-[8rem] max-sm:w-full flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-4"
                    onClick={() => handleIconClick(icon)}
                  >
                    <IconRenderer
                      iconData={icon.content}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="text-[10px] sm:text-xs text-muted-foreground truncate w-full text-center">
                      {icon.name}
                    </span>
                  </Button>
                </DialogTrigger>
                {selectedIconData && (
                  <IconDialog
                    isInCart={isInCart}
                    icon={selectedIconData}
                    multiSelect={multiSelect}
                    pathname={pathname}
                    addRemoveIcon={addRemoveIcon}
                  />
                )}
              </Dialog>
            ))}
          </div>
        );
      }}
    />
  );
}
