import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreviewTab } from "./preview-tab";
import { CodeTab } from "./code-tab";
import { Suspense } from "react";
import { Loader2 } from "lucide-react";
interface IconDialogProps {
  icon: any;
  pathname: string;
}

export function IconDialog({ icon, pathname }: IconDialogProps) {
  return (
    <DialogContent 
      aria-description="icon-dialog-description" 
      aria-describedby="icon-dialog-description" 
      className="max-w-3xl w-[95vw] sm:w-[85vw] h-[60vh] sm:h-[85vh] p-3 sm:p-6 gap-2 sm:gap-3 flex flex-col items-start justify-start rounded-md shadow-md overflow-hidden"
    >
      <DialogHeader className="mb-2 sm:mb-1 w-full">
        <DialogTitle className="text-base sm:text-xl font-semibold truncate">
          {icon.name}
        </DialogTitle>
      </DialogHeader>
      
      <Tabs defaultValue="preview" className="w-full flex-1 flex flex-col items-start">
        <TabsList className="w-full grid grid-cols-2 mb-1 sm:mb-4">
          <TabsTrigger value="preview" className="text-sm sm:text-base">Preview</TabsTrigger>
          <TabsTrigger value="code" className="text-sm sm:text-base">Code</TabsTrigger>
        </TabsList>
        
        <div className="w-full flex-1 overflow-hidden">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-5 w-5 sm:h-6 sm:w-6 animate-spin" />
            </div>
          }>
            <TabsContent value="preview" className="h-full mt-0 data-[state=active]:flex data-[state=active]:flex-col">
              <PreviewTab icon={icon} pathname={pathname} />
            </TabsContent>
            <TabsContent value="code" className="h-full mt-0 data-[state=active]:flex data-[state=active]:flex-col">
              <CodeTab icon={icon} />
            </TabsContent>
          </Suspense>
        </div>
      </Tabs>
    </DialogContent>
  );
} 