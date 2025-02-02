import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import IconRenderer from "./render";

interface PreviewTabProps {
  icon: any;
  pathname: string;
}

export function PreviewTab({ icon, pathname }: PreviewTabProps) {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <ScrollArea className="h-full w-full">
      <div  className="space-y-3 sm:space-y-3 p-2 sm:p-4">
        <div style={{ border: "1px solid blue" }} className="flex items-center justify-center p-3 sm:p-5 bg-muted/50 rounded-lg h-[150px] ">

          <div className="w-16 h-16 sm:w-32 sm:h-20 flex items-center justify-center">
            <IconRenderer iconData={icon.content} />
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto w-full">
          <div>
            <p className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-">Add to your project</p>
            <Button 
              variant="secondary" 
              className="w-full font-mono text-[10px] sm:text-xs h-auto py-2 sm:py-2.5"
              onClick={() => copyToClipboard(`npx icora add ${pathname}-${icon.name}`)}
            >
              <Copy className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="break-all text-left">npx icora@latest add {pathname}-{icon.name}</span>
            </Button>
          </div>
          
          <div>
            <p className="text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Import in your code</p>
            <Button 
              variant="secondary" 
              className="w-full font-mono text-[10px] sm:text-xs h-auto py-2 sm:py-2.5"
              onClick={() => copyToClipboard(`import { ${icon.name} } from "@/assets/icons/${pathname}/${icon.name}"`)}
            >
              <Copy className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="break-all text-left">
                import &#123; {icon.name} &#125; from &quot;@/assets/icons/{pathname}/{icon.name}&quot;
              </span>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
} 