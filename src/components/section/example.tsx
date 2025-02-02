'use client'
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { iconLibraries } from "@/data/icon-libraries"

export default function ExampleSection() {
  return (
    <div id="examples" className="container max-w-4xl py-4 space-y-8">
      <div className="space-y-4">


        <h1 className="text-3xl font-bold">Examples</h1>
        <p className="text-lg text-muted-foreground">

          See how to use Icora icons in different scenarios.
        </p>
      </div>

      <Tabs defaultValue="basic" className="space-y-8">
        <TabsList>
          <TabsTrigger value="basic">Basic Usage</TabsTrigger>
          <TabsTrigger value="styling">Styling</TabsTrigger>
          <TabsTrigger value="libraries">Libraries</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Basic Usage</h2>
              <p className="text-muted-foreground">
                Simple examples of how to use icons in your components.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-medium">Default Size</h3>
                <div className="flex items-center gap-2">
                  {/* Add example icons here */}
                </div>
              </div>

              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-medium">Custom Size</h3>
                <div className="flex items-center gap-2">
                  {/* Add example icons here */}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="styling" className="space-y-4">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Styling Examples</h2>
              <p className="text-muted-foreground">
                Different ways to style your icons.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-medium">Colors</h3>
                <div className="flex items-center gap-2">
                  {/* Add colored icons here */}
                </div>
              </div>

              <div className="space-y-2 p-4 border rounded-lg">
                <h3 className="font-medium">Animations</h3>
                <div className="flex items-center gap-2">
                  {/* Add animated icons here */}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="libraries" className="space-y-4">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Available Libraries</h2>
              <p className="text-muted-foreground">
                Overview of all supported icon libraries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(iconLibraries).map(([key, name]) => (
                <div key={key} className="p-4 border rounded-lg">
                  <p className="font-medium">{name}</p>
                  <p className="text-sm text-muted-foreground">Prefix: {key}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 