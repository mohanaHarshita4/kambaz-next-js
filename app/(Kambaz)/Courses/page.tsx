"use client";

import React from "react";
import Link from "next/link";
import * as db from "../Database";
import { Card, Row, Col } from "react-bootstrap";

export default function CoursesListPage() {
  const courses = db.courses || [];

  return (
    <div className="p-4">
      <h1 className="text-danger">Courses</h1>
      <hr />

      {courses.length === 0 ? (
        <p>No courses available right now.</p>
      ) : (
        <Row xs={1} md={3} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id}>
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={course.image || "/images/reactjs.jpg"}
                  height={150}
                  alt={course.name}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go to Course
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
