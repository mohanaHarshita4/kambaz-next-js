import Link from "next/link";
import Image from "next/image";

export default function DashBoard() {
  const courses = [
    { id: "1234", title: "CS1234 React JS", img: "/images/reactjs.jpg" },
    { id: "2345", title: "CS2345 Node", img: "/images/nodejs.jpg" },
    { id: "3456", title: "CS3456 CSS", img: "/images/css.jpg" },
    { id: "4567", title: "CS5600 Web Development", img: "/images/wd1.png" },
    { id: "5678", title: "CS5600 Web Development2", img: "/images/wd2.png" },
    { id: "6789", title: "CS5600 Web Development3", img: "/images/wd3.png" },
    { id: "7890", title: "CS5600 Web Development4", img: "/images/wd4.png" },
    { id: "0123", title: "CS5600 Web Development5", img: "/images/wd5.png" },
    { id: "0124", title: "CS5600 Web Development6", img: "/images/wd6.png" },
  ];
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <div id="wd-dashboard-courses">
        {courses.map(c => (
          <div className="wd-dashboard-course" key={c.id}>
            <Link href={`/Courses/${c.id}`} className="wd-dashboard-course-link">
              <Image src={c.img} width={200} height={120} alt={c.title} />
              <div>
                <h5>{c.title}</h5>
                <p className="wd-dashboard-course-title">Full Stack software developer</p>
                <button>Go</button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}