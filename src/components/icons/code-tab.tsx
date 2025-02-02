import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { importStatement } from "@/lib/importStatement";

interface CodeTabProps {
  icon: any;
}

export function CodeTab({ icon }: CodeTabProps) {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  return (
    <div className="relative h-full">
      <ScrollArea className="h-full w-full rounded-md border bg-muted max-h-[40vh] sm:max-h-[45vh]">
        <pre className="p-4 text-sm leading-relaxed flex">
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm whitespace-pre-wrap break-all text-left">
            {importStatement()+icon.content}



          </code>
        </pre>
      </ScrollArea>
      <Button 
        size="sm"
        variant="secondary"
        className="absolute top-3 right-3"
        onClick={() => copyToClipboard(importStatement()+icon.content)}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
} 