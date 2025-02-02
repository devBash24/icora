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
    <DialogContent aria-description="icon-dialog-description" aria-describedby="icon-dialog-description" className="max-w-3xl w-[90vw] h-[90vh]">
      <DialogHeader className="mb-4">
        <DialogTitle className="text-xl font-semibold">{icon.name}</DialogTitle>
      </DialogHeader>
      <Tabs defaultValue="preview" className="flex-1 h-[calc(100%-4rem)]">
        <TabsList className="w-full grid grid-cols-2 mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <div className="flex-1 h-[calc(100%-3rem)]">
          <Suspense fallback={
            <div className="flex items-center justify-center h-full">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          }>
            <TabsContent value="preview" className="h-full mt-0">
              <PreviewTab icon={icon} pathname={pathname} />
            </TabsContent>
            <TabsContent value="code" className="h-full mt-0">
              <CodeTab icon={icon} />
            </TabsContent>
          </Suspense>
        </div>
      </Tabs>
    </DialogContent>
  );
} 