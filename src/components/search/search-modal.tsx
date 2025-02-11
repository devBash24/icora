"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Search, Loader2 } from "lucide-react"
import { Virtuoso } from "react-virtuoso"
import useSearch from "@/hooks/useSearch"
import IconRenderer from "../icons/render"
import { IconDialog } from "../icons/icon-dialog"
import { useEffect, useState } from "react"
import { useIconCart } from "@/context/iconCartProvider"

interface SearchModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const { searchQuery, setSearchQuery, allIcons, loadMore, isFetchingNextPage, isLoading } = useSearch()
  const [selectedIcon, setSelectedIcon] = useState<any>(null);
  const [showIconDialog, setShowIconDialog] = useState(false);
  const [keyPress, setKeyPress] = useState<Set<string>>(new Set<string>());
  const { addRemoveIcon,multiSelect } = useIconCart()

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      keyPress.add(e.key.toLowerCase());
      if ((keyPress.has("meta") || keyPress.has("control")) && keyPress.has("k")) {
        onOpenChange(true);
      }
    })
    window.addEventListener("keyup", (e) => {
      keyPress.clear();
    });
    return () => {
      window.removeEventListener("keydown", () => {});
      window.removeEventListener("keyup",() => {});
    }
  },[keyPress, onOpenChange])

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange} >
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 rounded-md shadow-md">
          <div className="flex flex-col h-full">
            {/* Search Input */}
            <div className="p-6 border-b">
              <div className="relative max-w-3xl mx-auto">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search icons..."
                  className="pl-12 h-12 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-hidden">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="h-6 w-6 animate-spin" />
                </div>
              ) : allIcons.length > 0 ? (
                <div className="h-full">
                  <Virtuoso
                    style={{ height: '100%' }}
                    data={allIcons}
                    endReached={loadMore}
                    overscan={200}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4"
                    itemContent={(index, icon) => (
                      <div
                        key={`${icon.library}-${icon.name}-${index}`}
                        className="flex flex-col items-center p-4 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedIcon(icon)
                          setShowIconDialog(true)
                        }}
                      >
                        <div className="w-10 h-10 mb-3">
                          <IconRenderer iconData={icon.content} />
                        </div>
                        <p className="text-sm font-medium text-center truncate w-full">{icon.name}</p>
                        <p className="text-xs text-muted-foreground text-center truncate w-full">{icon.library}</p>
                      </div>
                    )}
                    components={{
                      Footer: () =>
                        isFetchingNextPage ? (
                          <div className="flex justify-center p-4 col-span-full">
                            <Loader2 className="h-6 w-6 animate-spin" />
                          </div>
                        ) : null
                    }}
                  />
                </div>
              ) : searchQuery.length > 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <p className="text-lg font-medium">No icons found</p>
                  <p className="text-sm text-muted-foreground">
                    Try searching for something else
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center p-4">
                  <p className="text-lg font-medium">Search for icons</p>
                  <p className="text-sm text-muted-foreground">
                    Start typing to search across all icon libraries
                  </p>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showIconDialog} onOpenChange={setShowIconDialog}>
        {selectedIcon && (
          <IconDialog
            icon={selectedIcon}
            pathname={selectedIcon.library.toLowerCase()}
            addToCart={addRemoveIcon}
            multiSelect={multiSelect}
          />

        )}
      </Dialog>
    </>
  )
} 