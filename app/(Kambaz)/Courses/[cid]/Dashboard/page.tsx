"use client";

import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function Dashboard() {
  const { cid } = useParams();
  const course = (db.courses as any[]).find((c) => c._id === cid || c.id === cid);

  if (!course) {
    return (
      <div className="p-4 text-danger">
        <h5>⚠️ Course not found.</h5>
        <Link href="/Courses" passHref>
          <Button variant="outline-secondary" className="mt-3">
            ← Back to Courses
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4">
      <Card className="p-4 shadow-sm">
        <h3 className="fw-semibold text-dark mb-3">
          {course.name || course.title || "Course Dashboard"}
        </h3>
        <p className="text-muted">
          Welcome to the {course.name || "selected"} course dashboard.  
          Use the sidebar or links below to navigate between modules, assignments, grades, and people.
        </p>

        <div className="d-flex flex-wrap gap-2 mt-3">
          <Link href={`/Courses/${cid}/Home`} passHref>
            <Button variant="outline-dark">🏠 Home</Button>
          </Link>
          <Link href={`/Courses/${cid}/Modules`} passHref>
            <Button variant="outline-primary">📚 Modules</Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`} passHref>
            <Button variant="outline-success">📝 Assignments</Button>
          </Link>
          <Link href={`/Courses/${cid}/People`} passHref>
            <Button variant="outline-danger">👥 People</Button>
          </Link>
          <Link href={`/Courses/${cid}/Grades`} passHref>
            <Button variant="outline-secondary">📊 Grades</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
