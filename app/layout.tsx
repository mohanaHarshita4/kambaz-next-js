import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";   // Bootstrap first
import "./globals.css";                          // Your global custom styles (if you need them)

export const metadata: Metadata = {
  title: "Kambaz",
  description: "Kambaz Learning Management App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
