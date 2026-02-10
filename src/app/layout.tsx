import type { ReactNode } from "react";
import MainLayout from "@/pc/main-layout";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import SessionProvider from "@/providers/session-provider";//-->solution

// import { SessionProvider } from "next-auth/react";
//SessionProvider gives your React app access to that logged-in user
//but the error here is :
//sessionProvider is a client component and cannot be used in a server component(lauyout.tsx is a server component by default)
//so we make a client wrapper for NextAuth.
export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
