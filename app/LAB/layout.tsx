"use client";
import { ReactNode } from "react";
import KambazNavigation from "../(Kambaz)/Navigation";   
import LabsNavigation from "./navigation";           

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <table style={{ width: "100%" }}>
      <tbody>
        <tr>
          {/* Main Left Sidebar */}
          <td valign="top" width="120">
            <KambazNavigation />
          </td>

          {/* Labs Sidebar */}
          <td valign="top" width="200" style={{ backgroundColor: "#f8f9fa" }}>
            <LabsNavigation />
          </td>

          {/* Main Content */}
          <td valign="top" width="100%">
            <div className="p-3">{children}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
