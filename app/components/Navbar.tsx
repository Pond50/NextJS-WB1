// navbar       home/courses/about
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex justify-between items-center p-4 bg-black shadow-md">
            <ul className="flex gap-6">
                <li><Link href="/">หน้าแรก</Link></li>
                <li><Link href="/courses">รายวิชา</Link></li>
                <li><Link href="/about">เกี่ยวกับเรา</Link></li>
                <li><Link href="/band">วงดนตรี</Link></li>
            </ul>
        </nav>
    );
}