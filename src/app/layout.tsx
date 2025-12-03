import type { ReactNode } from "react";
import MainLayout from "@/pc/main-layout";
import { ThemeProvider } from "@/providers/theme-provider";
import './globals.css';

export const metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio website.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainLayout>{children}</MainLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}