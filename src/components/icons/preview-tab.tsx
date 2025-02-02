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
    <ScrollArea className="h-full">
      <div className="space-y-6 p-4">
        <div className="flex justify-center p-6 bg-muted/50 rounded-lg">
          <IconRenderer iconData={icon.content}  />
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">Add to your project</p>
            <Button 
              variant="secondary" 
              className="w-full font-mono text-xs h-auto py-2.5"
                  onClick={() => copyToClipboard(`npx icora add ${pathname}-${icon.name}`)}
            >
              <Copy className="mr-2 h-4 w-4 flex-shrink-0" />

              <span className="break-all text-left">npx icora add {pathname}-{icon.name}</span>
            </Button>
          </div>
          <div>

            <p className="text-sm font-medium mb-2">Import in your code</p>
            <Button 
              variant="secondary" 
              className="w-full font-mono text-xs h-auto py-2.5"
              onClick={() => copyToClipboard(`import { ${icon.name} } from "@/assets/icons/${pathname}/${pathname}"`)}
            >
              <Copy className="mr-2 h-4 w-4 flex-shrink-0" />
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