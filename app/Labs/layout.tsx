'use client';

import Navigation from "../(Kambaz)/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";  
import store from "./store";             

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const labLinks = [
    { href: "/Labs", label: "Labs" },
    { href: "/Labs/Lab1", label: "Lab 1" },
    { href: "/Labs/Lab2", label: "Lab 2" },
    { href: "/Labs/Lab3", label: "Lab 3" },
    { href: "/Labs/Lab4", label: "Lab 4" },
    { href: "/Labs/Lab5", label: "Lab 5" },

    { href: "/", label: "Home" },
  ];

  return (
    <Provider store={store}> 
      <div className="d-flex">
        {/* Global Kanbas sidebar */}
        <Navigation />

        {/* Labs sub-sidebar + content */}
        <div className="d-flex flex-fill">
          <aside
            className="p-3 border-end"
            style={{ minWidth: 180, backgroundColor: "#f8f9fa" }}
          >
            <ul className="list-unstyled">
              {labLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`d-block py-2 px-2 ${
                      pathname === link.href ? "fw-bold text-danger" : "text-dark"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <main className="flex-fill p-4">{children}</main>
        </div>
      </div>
    </Provider>
  );
}
