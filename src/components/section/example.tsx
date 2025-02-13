"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiOutlineUserAdd } from "@/assets/icons/ai/AiOutlineUserAdd";
import { PiShootingStarLight } from "@/assets/icons/pi/PiShootingStarLight";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExample } from "./code-example";

export default function ExampleSection() {
  const [showCode, setShowCode] = useState(false);
  const [selectedCode, setSelectedCode] = useState<{
    title: string;
    code: string;
  }>({ title: "", code: "" });
  return (
    <div
      id="examples"
      className="container max-w-4xl py-2 sm:py-4 space-y-4 sm:space-y-8 px-2 sm:px-4"
    >
      <div className="space-y-2 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Examples</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          See how to use Icora icons in different scenarios.
        </p>
      </div>

      <Tabs defaultValue="basic" className="space-y-4 sm:space-y-8">
        <TabsList className="w-full flex justify-start overflow-x-auto sm:overflow-visible">
          <TabsTrigger value="basic" className="text-sm sm:text-base">
            Basic Usage
          </TabsTrigger>
          <TabsTrigger value="styling" className="text-sm sm:text-base">
            Styling
          </TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Basic Usage</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Simple examples of how to use icons in your components.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">
                  Default Size
                </h3>
                <div className="flex items-center gap-2">
                  <AiOutlineUserAdd />
                  <span className="text-xs text-muted-foreground">
                    Default (1em)
                  </span>
                </div>
              </div>

              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">
                  Custom Size
                </h3>
                <div className="flex items-center gap-2">
                  <AiOutlineUserAdd className="h-4 w-4" />
                  <AiOutlineUserAdd className="h-6 w-6" />
                  <AiOutlineUserAdd className="h-8 w-8" />
                  <span className="text-xs text-muted-foreground">
                    16px, 24px, 32px
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="styling" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">
                Styling Icons
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn how to customize the appearance of your icons.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <CodeExample
                title="Colors"
                description="Using text colors"
                code={`<PiShootingStarLight className="h-6 w-6 text-primary" />
<PiShootingStarLight className="h-6 w-6 text-blue-500" />
<PiShootingStarLight className="h-6 w-6 text-green-500" />
<PiShootingStarLight className="h-6 w-6 text-red-500" />`}
              >
                <PiShootingStarLight className="h-6 w-6 text-primary" />
                <PiShootingStarLight className="h-6 w-6 text-blue-500" />
                <PiShootingStarLight className="h-6 w-6 text-green-500" />
                <PiShootingStarLight className="h-6 w-6 text-red-500" />
              </CodeExample>

              <CodeExample
                title="Animations"
                description="Using Tailwind animations"
                code={`<PiShootingStarLight className="h-6 w-6 animate-spin" />
<PiShootingStarLight className="h-6 w-6 animate-pulse" />
<PiShootingStarLight className="h-6 w-6 animate-bounce" />
<PiShootingStarLight className="h-6 w-6 hover:scale-125 transition-transform duration-200" />`}
              >
                <PiShootingStarLight className="h-6 w-6 animate-spin" />
                <PiShootingStarLight className="h-6 w-6 animate-pulse" />
                <PiShootingStarLight className="h-6 w-6 animate-bounce" />
                <PiShootingStarLight className="h-6 w-6 hover:scale-125 transition-transform duration-200" />
              </CodeExample>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showCode} onOpenChange={setShowCode}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedCode.title}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <SyntaxHighlighter
              language="jsx"
              style={oneLight}
              customStyle={{
                margin: 0,
                padding: "1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
              }}
            >
              {selectedCode.code}
            </SyntaxHighlighter>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
