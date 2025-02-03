import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/context/queryProvider";

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
      <QueryProvider>
        <body >
          <div className="flex flex-col h-screen max-w-screen">
            <Header />
            <div className="flex flex-1 overflow-hidden">
              <div className="hidden md:block">
                <Sidebar />
              </div>
              <main className="flex-1 overflow-y-auto pb-10">
                {children}
              </main>
            </div>
          </div>
        </body>
      </QueryProvider>
    </html>
  );
}
