import Link from "next/link";
export default function SignIn() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input suppressHydrationWarning={true} defaultValue="John"  placeholder="username" className="wd-username" /> <br />
            <input suppressHydrationWarning={true} defaultValue="abc@123" placeholder="password" type="password" className="wd-password" /> <br />
            <Link href="/DashBoard" id="wd-signin-btn"> Sign in </Link> <br />
            <Link href="SignUp" id="wd-signup-link"> Sign up </Link>
        </div>
    );
}