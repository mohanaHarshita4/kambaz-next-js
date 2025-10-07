"use client";
import Link from "next/link";

export default function LabsNavigation() {
  return (
    <div id="wd-Labs-navigation" className="p-3 border-end bg-light" style={{ minWidth: "200px" }}>
      <h4>Labs</h4>
      <ul className="list-unstyled">
        <li><Link href="/Labs">Student Info</Link></li>
        <li><Link href="/Labs/Labs1">Labs 1</Link></li>
        <li><Link href="/Labs/Labs2">Labs 2</Link></li>
        <li><Link href="/Labs/Labs3">Labs 3</Link></li>
        <li><Link href="/Labs/Kambaz">Kambaz</Link></li>
        <li><a href="https://github.com/mohanaHarshita4" target="_blank">My GitHub</a></li>
      </ul>
    </div>
  );
}
