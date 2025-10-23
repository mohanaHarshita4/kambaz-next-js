"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course?: { name: string } }) {
  const pathname = usePathname();
  const section = pathname.split("/").pop();
  return (
    <span>
      {course?.name ?? "Course"} &gt; {section}
    </span>
  );
}
