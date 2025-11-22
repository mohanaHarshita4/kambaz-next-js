import Link from "next/link";
import TOC from "./TOC";
export default function Labs() {
  return (
    <div>
      <TOC />
    <div id="wd-labs" className="p-4">
      <div className="mb-6">
        <h2>Student Info</h2>
        <p><strong>Name:</strong> Mohana Harshita</p>
        <p><strong>Section:</strong> CS5610 18616 SECTION-4 </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/mohanaHarshita4/kambaz-next-js"
            target="_blank"
            rel="noopener noreferrer"
          >
                  mohanaHarshita4         
             </a>
        </p>
      </div>

      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab4" id="wd-lab4-link">
            Lab 4: React Applications
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab5" id="wd-lab5-link">
            Lab 5:  Implementing RESTful Web APIs with Express.js
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
    </div>
  );
}