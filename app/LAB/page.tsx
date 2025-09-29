import Link from "next/link";

export default function LAB() {
  return (
    <div id="wd-labs" className="p-4">
      <div className="mb-6">
        <h2>Student Info</h2>
        <p><strong>Name:</strong> Mohana</p>
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
          <Link href="/LAB/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/LAB/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/LAB/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
      </ul>
    </div>
  );
}