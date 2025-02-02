'use client'
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ExampleSection() {
  return (
    <div id="examples" className="container max-w-4xl py-2 sm:py-4 space-y-4 sm:space-y-8 px-2 sm:px-4">
      <div className="space-y-2 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Examples</h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          See how to use Icora icons in different scenarios.
        </p>
      </div>

      <Tabs defaultValue="basic" className="space-y-4 sm:space-y-8">
        <TabsList className="w-full flex justify-start overflow-x-auto sm:overflow-visible">
          <TabsTrigger value="basic" className="text-sm sm:text-base">Basic Usage</TabsTrigger>
          <TabsTrigger value="styling" className="text-sm sm:text-base">Styling</TabsTrigger>
          <TabsTrigger value="libraries" className="text-sm sm:text-base">Libraries</TabsTrigger>
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
                <h3 className="text-sm sm:text-base font-medium">Default Size</h3>
                <div className="flex items-center gap-2">
                  {/* Add example icons here */}
                </div>
              </div>

              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">Custom Size</h3>
                <div className="flex items-center gap-2">
                  {/* Add example icons here */}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="styling" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Styling Icons</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Learn how to customize the appearance of your icons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">Colors</h3>
                <div className="flex items-center gap-2">
                  {/* Add colored icons examples */}
                </div>
              </div>

              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">Animations</h3>
                <div className="flex items-center gap-2">
                  {/* Add animated icons examples */}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="libraries" className="space-y-4">
          <Card className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold">Framework Integration</h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Examples of using Icora with popular frameworks and libraries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">React</h3>
                <div className="flex items-center gap-2">
                  {/* Add React usage examples */}
                </div>
              </div>

              <div className="space-y-2 p-3 sm:p-4 border rounded-lg">
                <h3 className="text-sm sm:text-base font-medium">Next.js</h3>
                <div className="flex items-center gap-2">
                  {/* Add Next.js usage examples */}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 