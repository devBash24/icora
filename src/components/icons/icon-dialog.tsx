import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreviewTab } from "./preview-tab";
import { CodeTab } from "./code-tab";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiOutlinePlusCircle } from "@/assets/icons/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@/assets/icons/ai/AiOutlineMinusCircle";
import { IconData } from "@/lib/types";

interface IconDialogProps {
  icon: IconData;
  pathname: string;
  addRemoveIcon: (icon: IconData) => void;
  multiSelect?: boolean;
  isInCart: (icon: IconData) => boolean;
}

export function IconDialog({
  isInCart,
  icon,
  pathname,
  addRemoveIcon,
}: IconDialogProps) {
  return (
    <DialogContent
      aria-description="icon-dialog-description"
      aria-describedby="icon-dialog-description"
      className="max-w-3xl w-[95vw] sm:w-[85vw] h-[60vh] sm:h-[85vh] p-3 sm:p-6 gap-2 sm:gap-3 flex flex-col items-start justify-start rounded-md shadow-md overflow-hidden"
    >
      <DialogHeader className="mb-2 sm:mb-1 w-full flex flex-row items-center justify-between">
        <DialogTitle className="text-base sm:text-xl font-semibold truncate flex items-center gap-2">
          {icon.name}
          <div className="transition-all duration-200 ease-in-out">
            {isInCart(icon) ? (
              <Button
                variant="outline"
                size="sm"
                className="group flex items-center gap-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 transition-all duration-200"
                onClick={() => addRemoveIcon(icon)}
              >
                <AiOutlineMinusCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="sr-only">Remove from cart</span>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="group flex items-center gap-2 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-200"
                onClick={() => addRemoveIcon(icon)}
              >
                <AiOutlinePlusCircle className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                <span className="sr-only">Add to cart</span>
              </Button>
            )}
          </div>
        </DialogTitle>
      </DialogHeader>

      <Tabs
        defaultValue="preview"
        className="w-full flex-1 flex flex-col items-start"
      >
        <TabsList className="w-full grid grid-cols-2 mb-1 sm:mb-4">
          <TabsTrigger value="preview" className="text-sm sm:text-base">
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="text-sm sm:text-base">
            Code
          </TabsTrigger>
        </TabsList>

        <div className="w-full flex-1 overflow-hidden">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-full">
                <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
              </div>
            }
          >
            <TabsContent
              value="preview"
              className="h-full mt-0 data-[state=active]:flex data-[state=active]:flex-col"
            >
              <PreviewTab icon={icon} pathname={pathname} />
            </TabsContent>
            <TabsContent
              value="code"
              className="h-full mt-0 data-[state=active]:flex data-[state=active]:flex-col"
            >
              <CodeTab icon={icon} />
            </TabsContent>
          </Suspense>
        </div>
      </Tabs>
    </DialogContent>
  );
}
