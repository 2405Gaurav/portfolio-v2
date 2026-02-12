import type { ReactNode } from "react";
import MainLayout from "@/pc/main-layout";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import SessionProvider from "@/providers/session-provider";//-->solution
import Script from "next/script";

// import { SessionProvider } from "next-auth/react";
//SessionProvider gives your React app access to that logged-in user
//but the error here is :
//sessionProvider is a client component and cannot be used in a server component(lauyout.tsx is a server component by default)
//so we make a client wrapper for NextAuth.
// export const metadata = {
//   title: "Portfolio",
//   description: "Welcome to my portfolio website.",
// };



export const metadata = {
  metadataBase: new URL("https://www.thegauravthakur.in"),

  title: {
    default: "Gaurav Thakur | Backend Developer & Software Engineer",
    template: "%s | Gaurav Thakur",
  },

  description:
    "Gaurav Thakur is a Backend Developer specializing in scalable systems, Node.js, PostgreSQL, and AI-powered applications. Explore projects, experience, and technical expertise.",

  keywords: [
    "Gaurav Thakur",
    "Backend Developer",
    "Software Engineer",
    "Node.js Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "System Design",
    "PostgreSQL",
    "React Developer",
    "AI Developer Portfolio",
  ],

  authors: [{ name: "Gaurav Thakur" }],
  creator: "Gaurav Thakur",
  publisher: "Gaurav Thakur",

  openGraph: {
    title: "Gaurav Thakur | Backend Developer Portfolio",
    description:
      "Backend Developer building scalable systems, fintech platforms, and AI-powered applications.",
    url: "https://yourdomain.com",
    siteName: "Gaurav Portfolio",
    images: [
      {
        url: "/og-image.png", // Add a 1200x630 image in public folder
        width: 1200,
        height: 630,
        alt: "Gaurav Thakur Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Gaurav Thakur | Backend Developer",
    description:
      "Backend Developer specializing in scalable APIs, databases, and system design.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
            {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SQTNLDZEL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SQTNLDZEL');
          `}
        </Script>
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
