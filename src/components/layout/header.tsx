"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Search } from "lucide-react"
import { useState } from "react"
import { SearchModal } from "@/components/search/search-modal"

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container w-screen flex h-14 items-center justify-between">
        <div className="mx-8 flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">Icora</span>
          </Link>
          
          {/* Search button */}
          <Button
            variant="outline"
            className="hidden md:flex items-center"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-4 w-8 mr-2" />
            Search icons...
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        <div className="flex items-center space-x-4 mx-8">
          <nav className="flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="#docs">Docs</Link>
            </Button>
            

            <Button variant="outline" asChild>
              <Link href="#examples">Examples</Link>
            </Button>


            <Button variant="ghost" size="icon" asChild>
              <Link 
                href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/devBash24/Icora-web"} 
                target="_blank"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>

      <SearchModal 
        open={searchOpen} 
        onOpenChange={setSearchOpen}
      />
    </header>
  )
} 