import Link from "next/link";
export default function SignIn() {
 return (
   <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input className="wd-username" placeholder="username" /> <br />
      <input className="wd-password" placeholder="password" type="password" /> <br />
      <Link id="wd-signin-btn" href="/DashBoard"> Sign in </Link> <br />
      <Link id="wd-signup-link" href="/Account/SignUp"> Sign up </Link>
    </div>

);}