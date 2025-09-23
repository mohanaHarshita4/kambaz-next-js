import Link from "next/link";

export default function Labs() { 
    return ( 
        <div id="wd-labs">
            <h1>Labs</h1>
            <ul>
                <li><Link href="/LAB/Lab1" id="wd-Lab1-link">Lab 1: HTML Examples</Link></li>
                <li><Link href="/LAB/Lab2" id="wd-Lab2-link">Lab 2: CSS BAsics</Link></li>
                <li><Link href="/LAB/Lab3" id="wd-Lab3-link">Lab 3: JavaScriptFundamentals</Link></li>
            </ul>
        </div>
    );
}