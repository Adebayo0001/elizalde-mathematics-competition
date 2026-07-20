import type { Metadata } from "next";
import "../index.css";

export const metadata: Metadata = {
  title: "Elizalde Mathematics Competition",
  description: "Join the premier mathematics competition for schools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans text-brand-dark bg-brand-bg">
        {children}
      </body>
    </html>
  );
}
