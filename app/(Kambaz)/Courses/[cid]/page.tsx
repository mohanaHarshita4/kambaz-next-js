"use client";

import { useParams } from "next/navigation";
import * as db from "../../Database";      
import CourseNavigation from "./navigation";
import Breadcrumb from "./Breadcrumb";

export default function Courses({ courses }: any) {
  const { cid } = useParams();
  const course = db.courses.find((c: any) => c._id === cid);

  return (
    <div id="wd-course-page" className="container-fluid">
      <div className="row">
        {/* LEFT SIDEBAR */}
        <div className="col-2">
          <CourseNavigation />
        </div>

        {/* MAIN CONTENT */}
        <div className="col-10">
          <h2 className="text-danger mt-2">
            {course ? course.name : "Course"} &gt; <Breadcrumb course={course} />
          </h2>
          <hr />
          <p className="text-secondary">
            {course?.description ?? "Welcome to your course portal."}
          </p>
        </div>
      </div>
    </div>
  );
}
