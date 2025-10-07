"use client";

import Navigation from "../(Kambaz)/Navigation";
import Link from "next/link";

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="d-flex">
      {/* Global Kambaz Sidebar (black) */}
      <Navigation />

      {/* Labs layout wrapper */}
      <div className="d-flex flex-fill">
        {/* Labs sub-sidebar */}
        <aside
          className="p-3 border-end"
          style={{ minWidth: "180px", backgroundColor: "#f8f9fa" }}
        >
          <ul className="list-unstyled">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/Labs/Lab1">Lab 1</Link></li>
            <li><Link href="/Labs/Lab2">Lab 2</Link></li>
            <li><Link href="/Labs/Lab3">Lab 3</Link></li>
            <li><Link href="/Labs">Kambaz</Link></li>
          </ul>
        </aside>

        {/* Main Labs content */}
        <main className="flex-fill p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
