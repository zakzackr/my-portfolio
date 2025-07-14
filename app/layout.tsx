import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ryuichi Kozaki",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/profile.jpg" as="image" />
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" as="image" />
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" as="image" />
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" as="image" />
        <link rel="preload" href="/icons/shadcn.png" as="image" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}