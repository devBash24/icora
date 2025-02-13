"use client"
import { Button } from "@/components/ui/button"
import { Code } from "lucide-react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism"
import { useState } from "react"

interface CodeExampleProps {
  title: string
  description: string
  children: React.ReactNode
  code: string
}

export function CodeExample({ title, description, children, code }: CodeExampleProps) {
  const [showCode, setShowCode] = useState(false)

  return (
    <div className="space-y-3">
      <div className="p-3 sm:p-4 border rounded-lg">
        <h3 className="text-sm sm:text-base font-medium mb-2">{title}</h3>
        <div className="flex items-center gap-4">
          {children}
          <span className="text-xs text-muted-foreground">
            {description}
          </span>
        </div>
        <Button 
          variant="secondary" 
          className="w-full mt-2 text-[10px] sm:text-xs h-auto py-2"
          onClick={() => setShowCode(!showCode)}
        >
          <Code className="h-3 w-3 sm:h-4 sm:w-4" />
          {showCode ? 'Hide Code' : 'View Code'}
        </Button>
      </div>
      {showCode && (
        <div className="w-full overflow-hidden rounded-lg border">
          <SyntaxHighlighter 
            language="jsx" 
            style={oneLight}
            customStyle={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.875rem',
              maxHeight: '200px',
              overflow: 'auto'
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  )
} 