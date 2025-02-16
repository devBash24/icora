import dynamic from 'next/dynamic'
export const revalidate = 3600 
const ExampleSection = dynamic(() => import('@/components/section/example'), {
  loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />
})

const DocsSection = dynamic(() => import('@/components/section/docs'), {
  loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />
})

const Feedback = dynamic(() => import('@/components/feedback/feedback').then(mod => mod.Feedback), {
  loading: () => <div className="animate-pulse h-48 bg-muted rounded-lg" />
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen h-full overflow-y-auto px-7 pb-14">
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
