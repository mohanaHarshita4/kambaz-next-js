import Link from "next/link";

export default function TOC() {
  return (
    <div className="d-flex p-3">
      {/* Left side navigation */}
      <div className="me-5">
        <ul>
          <li>
            <Link href="/Labs" id="wd-Labs-home-link">Home</Link>
          </li>
          <li>
            <Link href="/Labs/Labs1" id="wd-Labs1-link">Labs 1</Link>
          </li>
          <li>
            <Link href="/Labs/Labs2" id="wd-Labs2-link">Labs 2</Link>
          </li>
          <li>
            <Link href="/Labs/Labs3" id="wd-Labs3-link">Labs 3</Link>
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
            <Link href="/Labs/Labs1">Labs 1: HTML Examples</Link>
          </li>
          <li>
            <Link href="/Labs/Labs2">Labs 2: CSS Basics</Link>
          </li>
          <li>
            <Link href="/Labs/Labs3">Labs 3: JavaScript Fundamentals</Link>
          </li>
          <li>
            <Link href="/Kambaz">Kambaz</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
