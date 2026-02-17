import type { Metadata } from "next";
import { ThemeProvider } from "@/modules/shared";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yousef Amr | Full-Stack Developer Portfolio",
  description:
    "Personal portfolio of Yousef Amr — Full-Stack Developer crafting digital experiences with clean code & creative design. Explore my projects, skills, and experience.",
  keywords: [
    "Yousef Amr",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Yousef Amr" }],
  openGraph: {
    title: "Yousef Amr | Full-Stack Developer",
    description:
      "Crafting digital experiences with clean code & creative design",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="app-fade-in">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
