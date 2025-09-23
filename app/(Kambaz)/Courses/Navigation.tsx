import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/1234/Home">Home</Link><br/>
      <Link href="/Courses/1234/Modules">Modules</Link><br/>
      <Link href="/Courses/1234/Assignments">Assignments</Link><br/>
    </div>
  );
}
