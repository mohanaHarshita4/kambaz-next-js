"use client";

import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div style={{ marginBottom: "10px" }}>
        <input id="wd-search-assignment" placeholder="Search for Assignments" style={{ marginRight: "10px" }} />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment" style={{ marginLeft: "5px" }}>+ Assignment</button>
      </div>

      <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total <button>+</button></h3>

      <ul id="wd-assignment-list" style={{ paddingLeft: "20px" }}>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">A1 - ENV + HTML</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/124" className="wd-assignment-link">A2 - CSS Basics</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/125" className="wd-assignment-link">A3 - JavaScript Fundamentals</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/126" className="wd-assignment-link">A4 - React Components</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/127" className="wd-assignment-link">A5 - Node.js Basics</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/128" className="wd-assignment-link">A6 - Express Routing</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/129" className="wd-assignment-link">A7 - MongoDB CRUD</Link></li>
        <li className="wd-assignment-list-item"><Link href="/Courses/1234/Assignments/130" className="wd-assignment-link">A8 - APIs Integration</Link></li>
      </ul>
    </div>
  );
}
