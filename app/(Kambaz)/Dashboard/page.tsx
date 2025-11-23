"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import * as userClient from "@/app/(Kambaz)/Account/client";
import * as coursesClient from "@/app/(Kambaz)/Courses/client";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [published, setPublished] = useState<any[]>([]);
  const [enrolled, setEnrolled] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({
    name: "",
    description: "",
    image: "/images/reactjs.jpg",
  });

  // ------------ LOAD ALL COURSES + MY ENROLLMENTS ------------
  const load = async () => {
    const all = await coursesClient.findAllCourses();
    setPublished(all || []);

    if (currentUser) {
      const mine = await userClient.findMyCourses();
      setEnrolled(mine || []);
    }
  };

  useEffect(() => {
    load();
  }, [currentUser]);

  // ------------ ADD NEW COURSE ------------
  const addCourse = async () => {
    if (!currentUser) return alert("You must sign in first");
    const newCourse = await userClient.createCourse(course);
    setPublished((p) => [...p, newCourse]);
    setCourse({ name: "", description: "", image: "/images/reactjs.jpg" });
  };

  // ------------ UPDATE COURSE ------------
  const updateCourse = async () => {
    if (!course._id) return alert("Select a course to edit.");
    const updated = await coursesClient.updateCourse(course);

    setPublished((p) => p.map((c) => (c._id === updated._id ? updated : c)));
    setCourse({ name: "", description: "", image: "/images/reactjs.jpg" });
  };

  // ------------ DELETE COURSE ------------
  const deleteCourse = async (id: string) => {
    await coursesClient.deleteCourse(id);
    setPublished((p) => p.filter((x) => x._id !== id));
  };

  // ------------ ENROLL ------------
  const enroll = async (courseId: string) => {
    if (!currentUser) return alert("Login required");
    await userClient.enrollIntoCourse(currentUser._id, courseId);
    await load();
  };

  // ------------ UNENROLL ------------
  const unenroll = async (courseId: string) => {
    if (!currentUser) return alert("Login required");
    await userClient.unenrollFromCourse(currentUser._id, courseId);
    await load();
  };

  const isEnrolled = (id: string) =>
    enrolled.some((c: any) => c._id === id);

  return (
    <div className="p-4">
      <h2>New Course</h2>

      <input
        placeholder="Name"
        className="form-control mb-2"
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <input
        placeholder="Description"
        className="form-control mb-2"
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />

      <button className="btn btn-primary me-2" onClick={addCourse}>
        Add
      </button>

      <button className="btn btn-warning" onClick={updateCourse}>
        Update
      </button>

      <hr />

      <h2>Published Courses ({published.length})</h2>
      <div className="row">
        {published.map((c: any) => (
          <div key={c._id} className="col-md-4 mb-4">
            <div className="card">
              <img src={c.image} className="card-img-top" height={200} />
              <div className="card-body">
                <h5>{c.name}</h5>
                <p>{c.description}</p>

                <Link
                  href={`/Courses/${c._id}/Home`}
                  className="btn btn-primary me-2"
                >
                  Go
                </Link>

                {isEnrolled(c._id) ? (
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => unenroll(c._id)}
                  >
                    Unenroll
                  </button>
                ) : (
                  <button
                    className="btn btn-success me-2"
                    onClick={() => enroll(c._id)}
                  >
                    Enroll
                  </button>
                )}

                <button
                  className="btn btn-warning me-2"
                  onClick={() => setCourse(c)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteCourse(c._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
