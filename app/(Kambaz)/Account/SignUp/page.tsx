import Link from "next/link";
export default function SignUp() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input placeholder="username" className="wd-username" value="john" /><br/>
      <input placeholder="password" type="password" className="wd-password" value="1234" /><br/>
      <input placeholder="verify password"
             type="password" className="wd-password-verify" value="1234" /><br/>
      <Link  href="Profile" > Sign up </Link><br />
      <Link  href="SignIn" > Sign in </Link>
    </div>
);}