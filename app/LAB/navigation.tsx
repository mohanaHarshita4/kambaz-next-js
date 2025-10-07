"use client";
import Link from "next/link";

export default function LabsNavigation() {
  return (
    <div id="wd-labs-navigation" className="p-3 border-end bg-light" style={{ minWidth: "200px" }}>
      <h4>Labs</h4>
      <ul className="list-unstyled">
        <li><Link href="/LAB">Student Info</Link></li>
        <li><Link href="/LAB/Lab1">Lab 1</Link></li>
        <li><Link href="/LAB/Lab2">Lab 2</Link></li>
        <li><Link href="/LAB/Lab3">Lab 3</Link></li>
        <li><Link href="/LAB/Kambaz">Kambaz</Link></li>
        <li><a href="https://github.com/mohanaHarshita4" target="_blank">My GitHub</a></li>
      </ul>
    </div>
  );
}
