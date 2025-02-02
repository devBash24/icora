'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"


export default function DocsSection() {
  return (
    <div id="docs" className="container max-w-4xl py-4 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Documentation</h1>
        <p className="text-lg text-muted-foreground">



          Learn how to use Icora in your projects.
        </p>
      </div>

      <Tabs defaultValue="installation" className="space-y-8">
        <TabsList>
          <TabsTrigger value="installation">Installation</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="installation" className="space-y-4">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Installation</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">1. Initialize Icora in your project:</p>
                  <Button 
                    variant="secondary" 
                    className="font-mono text-sm w-full justify-start"
                    onClick={() => navigator.clipboard.writeText("npx icora@latest init")}
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    npx icora@latest init

                  </Button>
                </div>
              </div>

            </div>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Usage</h2>
              <p className="text-muted-foreground">
                After installation, you can start using icons in your project:
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">1. Import an icon:</p>
                <Button 
                  variant="secondary" 
                  className="font-mono text-sm w-full justify-start"
                  onClick={() => navigator.clipboard.writeText('import { AiFillHome } from "@/assets/icons/ai/ai"')}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  import &#123; AiFillHome &#125; from &quot;@/assets/icons/ai/ai&quot;
                </Button>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">2. Use in your component:</p>
                <Button 
                  variant="secondary" 
                  className="font-mono text-sm w-full justify-start"
                  onClick={() => navigator.clipboard.writeText('<AiFillHome className="h-6 w-6" />')}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  &lt;AiFillHome className=&quot;h-6 w-6&quot; /&gt;
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="api" className="space-y-4">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">API Reference</h2>
              <p className="text-muted-foreground">
                Learn about the available API endpoints and options.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Icon Properties</h3>
              <div className="space-y-2">
                <p className="text-sm">All icons accept the following props:</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
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