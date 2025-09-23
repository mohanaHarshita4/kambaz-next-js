import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: "flex" }}>
        <nav style={{ width: "200px", padding: "20px", borderRight: "1px solid #ccc" }}>
          <h3>Kambaz</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              Account
              <ul style={{ listStyle: "none", paddingLeft: "15px" }}>
                <li><Link href="/Account/Signin">Sign In</Link></li>
                <li><Link href="/Account/SignUp">Sign Up</Link></li>
                <li><Link href="/Account/Profile">Profile</Link></li>
              </ul>
            </li>
            <li><Link href="/DashBoard">Dashboard</Link></li>
            <li><Link href="/Courses">Courses</Link></li>
            <li><Link href="/LAB">LAB</Link></li>
          </ul>
        </nav>
        <main style={{ flex: 1, padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
