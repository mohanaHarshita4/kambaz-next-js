"use client";

import Navigation from "../(Kambaz)/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "";

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const Item = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <li className="mb-1">
      <Link
        href={href}
        className={`d-block px-2 py-1 rounded text-decoration-none ${
          isActive(href) ? "fw-bold bg-light text-primary" : "text-body"
        }`}
      >
        {children}
      </Link>
    </li>
  );

  return (
    <div className="d-flex">
      {/* Main Kambaz sidebar (black) */}
      <Navigation />

      {/* Labs sub-sidebar + content */}
      <div className="d-flex flex-fill">
        {/* Labs sub-sidebar (fixed height, scrollable if needed) */}
        <aside
          className="border-end bg-body-tertiary"
          style={{ width: 220 }}
        >
          <div className="position-sticky top-0 vh-100 p-3 overflow-auto">
            <h5 className="mb-3">Labs</h5>
            <ul className="list-unstyled m-0">
              <Item href="/Labs">Home</Item>
              <Item href="/Labs/Lab1">Lab 1</Item>
              <Item href="/Labs/Lab2">Lab 2</Item>
              <Item href="/Labs/Lab3">Lab 3</Item>
            </ul>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-fill p-4">{children}</main>
      </div>
    </div>
  );
}
