import { Header } from "@/components/layout/header";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/context/queryProvider";
import { IconCartProvider } from "@/context/iconCartProvider";
import Sidebar from "@/components/layout/fetchSidebarItems";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Icora",
  description: "Icora is a collection of icons for your projects.",
  icons: {
    icon: "/icora.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-lt-installed="true">
        <body className={inter.className}>
      <QueryProvider>
        <IconCartProvider>
          <div className="flex flex-col h-screen max-w-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <div className="hidden md:block">
                <Sidebar />
              </div>
              <main className="flex-1 overflow-y-hidden pb-10">
                {children}
              </main>
            </div>
          </div>
        </IconCartProvider>
      </QueryProvider>
          </body>
    </html>

  );
}
