import Link from "next/link";
export default function Signin() {
    return (
        <div id="wd-Signin-screen">
            <h3>Sign in</h3>
            <input suppressHydrationWarning={true} defaultValue="John"  placeholder="username" className="wd-username" /> <br />
            <input suppressHydrationWarning={true} defaultValue="abc@123" placeholder="password" type="password" className="wd-password" /> <br />
            <Link href="/Dashboard" id="wd-Signin-btn"> Sign in </Link> <br />
            <Link href="Signup" id="wd-Signup-link"> Sign up </Link>
        </div>
    );
}