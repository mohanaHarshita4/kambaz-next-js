"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams(); 

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((label) => {
        const href = `/Courses/${cid}/${label}`; 
        const isActive = pathname === href;

        const classes = `list-group-item border-0 ${
          isActive
            ? "fw-bold text-black border-start border-4 border-dark"
            : "text-danger"
        }`;

        return (
          <Link key={label} href={href} className={classes}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
