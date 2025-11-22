"use client";

import { useSelector } from "react-redux";

export default function Dashboard({ courses }: { courses: any[] }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h2 className="mb-3">
        {currentUser
          ? `Welcome, ${currentUser.username}`
          : "Welcome to Kambaz"}
      </h2>

      <h4>Your Courses</h4>
      <ul className="list-group mt-3">
        {courses.map((course: any) => (
          <li
            key={course._id || course.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{course.name}</span>
            <span className="badge bg-primary">{course.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
