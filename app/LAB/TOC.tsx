import Link from "next/link";
export default function TOC() { 
    return (
        <ul>
            <li><Link href="/LAB">Home</Link></li>
            <li><Link href="/LAB/Lab1">Lab 1</Link></li>
            <li><Link href="/LAB/Lab1">Lab 2</Link></li>
            <li><Link href="/LAB/Lab1">Lab 3</Link></li>
            <li><Link href="/">Kambaz</Link></li>
        </ul>
    );
}