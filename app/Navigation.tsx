"use client";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav>
      <h2>Kambaz</h2>
      <ul>
        <li><Link href="/Account/Signin">Sign In</Link></li>
        <li><Link href="/Account/Signup">Sign Up</Link></li>
        <li><Link href="/Account/Profile">Profile</Link></li>
        <li><Link href="/Dashboard">Dashboard</Link></li>
        <li><Link href="/Courses/1234">Courses</Link></li>
        <li><Link href="/Courses/1234/Assignments">Assignments</Link></li>
        <li><Link href="/Lab">LAB</Link></li>
      </ul>
    </nav>
  );
}
