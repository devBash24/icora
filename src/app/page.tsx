import ExampleSection from "@/components/section/example";
import DocsSection from "@/components/section/docs";
import { Feedback } from "@/components/feedback/feedback"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-full overflow-y-auto px-7">
        <main className="flex-1">
          <div className="container py-6">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">Icora Icons</h1>
                <p className="text-muted-foreground">
                  A comprehensive collection of icons for your next project
                </p>
              </div>
              <DocsSection />
              <ExampleSection />
              <Feedback />
            </div>
          </div>
        </main>
    </div>
  )
}
