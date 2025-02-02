'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"

export default function DocsSection() {
  return (
    <div id="docs" className="container max-w-4xl py-2 sm:py-4 space-y-4 sm:space-y-8 px-2 sm:px-4">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Documentation</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Learn how to use Icora in your projects.
        </p>
      </div>

      <Tabs defaultValue="installation" className="space-y-4 sm:space-y-8">
        <TabsList className="w-full flex justify-start overflow-x-auto sm:overflow-visible">
          <TabsTrigger value="installation" className="text-sm sm:text-base">Installation</TabsTrigger>
          <TabsTrigger value="usage" className="text-sm sm:text-base">Usage</TabsTrigger>
          <TabsTrigger value="api" className="text-sm sm:text-base">API</TabsTrigger>
        </TabsList>

        <TabsContent value="installation" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Installation</h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">1. Initialize Icora in your project:</p>
                  <Button 
                    variant="secondary" 
                    className="font-mono text-xs sm:text-sm w-full justify-start"
                    onClick={() => navigator.clipboard.writeText("npx icora@latest init")}
                  >
                    <Copy className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    npx icora@latest init
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Usage</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                After installation, you can start using icons in your project:
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-muted-foreground">1. Import an icon:</p>
                <Button 
                  variant="secondary" 
                  className="font-mono text-[10px] sm:text-xs h-auto py-2 sm:py-2.5 w-full justify-start"
                  onClick={() => navigator.clipboard.writeText('import { AiFillHome } from "@/assets/icons/ai/ai"')}
                >
                  <Copy className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-all text-left text-wrap ">
                    import &#123; AiFillHome &#125; from &quot;@/assets/icons/ai/ai&quot;
                  </span>
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-muted-foreground">2. Use in your component:</p>
                <Button 
                  variant="secondary" 
                  className="font-mono text-[10px] sm:text-xs h-auto py-2 sm:py-2.5 w-full justify-start"
                  onClick={() => navigator.clipboard.writeText('<AiFillHome className="h-6 w-6" />')}
                >
                  <Copy className="mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="break-all text-left">
                    &lt;AiFillHome className=&quot;h-6 w-6&quot; /&gt;
                  </span>
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">API Reference</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn about the available API endpoints and options.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-medium">Icon Properties</h3>
              <div className="space-y-2">
                <p className="text-xs sm:text-sm">All icons accept the following props:</p>
                <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li>className: string - Apply CSS classes</li>
                  <li>size: number - Set width and height</li>
                  <li>color: string - Set icon color</li>
                  <li>...SVGProps - All standard SVG attributes</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 