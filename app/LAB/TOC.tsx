import Link from "next/link";

export default function TOC() {
  return (
    <div className="d-flex p-3">
      {/* Left side navigation */}
      <div className="me-5">
        <ul>
          <li>
            <Link href="/LAB" id="wd-lab-home-link">Home</Link>
          </li>
          <li>
            <Link href="/LAB/Lab1" id="wd-lab1-link">Lab 1</Link>
          </li>
          <li>
            <Link href="/LAB/Lab2" id="wd-lab2-link">Lab 2</Link>
          </li>
          <li>
            <Link href="/LAB/Lab3" id="wd-lab3-link">Lab 3</Link>
          </li>
          <li>
            <Link href="/Kambaz" id="wd-kambaz-link">Kambaz</Link>
          </li>
        </ul>
      </div>

      {/* Right side content */}
      <div>
        <h1><b>Labs</b></h1>
        <ul>
          <li>
            <Link href="/LAB/Lab1">Lab 1: HTML Examples</Link>
          </li>
          <li>
            <Link href="/LAB/Lab2">Lab 2: CSS Basics</Link>
          </li>
          <li>
            <Link href="/LAB/Lab3">Lab 3: JavaScript Fundamentals</Link>
          </li>
          <li>
            <Link href="/Kambaz">Kambaz</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
