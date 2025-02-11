import React from 'react';
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { importStatement } from "@/lib/importStatement";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { toast } from '@/hooks/use-toast';
interface CodeTabProps {
  icon: {
    content: string;
    language?: string;
  };
}

export function CodeTab({ icon }: CodeTabProps) {
  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Installation command has been copied to clipboard",
    })
  };


  const fullCode = importStatement() + icon.content;

  return (
    <div className="relative h-full">
      <div className="h-full w-full rounded-md border bg-muted max-h-[40vh] sm:max-h-[45vh] overflow-auto">
        <SyntaxHighlighter
          language={icon.language || 'javascript'}
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: '1rem',
            backgroundColor: 'hsl(var(--muted))',
            fontSize: '0.875rem',
            borderRadius: '0.375rem',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap',
            overflowWrap: 'break-word',
            width: '100%',
          }}
          codeTagProps={{
            className: 'font-source-code-pro break-words whitespace-pre-wrap w-full',
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {fullCode}
        </SyntaxHighlighter>
      </div>
      <Button
        size="sm"
        variant="secondary"
        className="absolute top-3 right-3"
        onClick={() => copyToClipboard(fullCode)}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}