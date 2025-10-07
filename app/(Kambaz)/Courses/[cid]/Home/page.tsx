"use client";
import { Button } from "react-bootstrap";
import CourseStatus from "./status";

export default function CourseHome() {
  return (
    <div id="wd-course-home" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-bold">Course 1234</h3>
        <div>
          <Button variant="secondary" size="sm" className="me-2">
            Collapse All
          </Button>
          <Button variant="secondary" size="sm" className="me-2">
            View Progress
          </Button>
          <Button variant="success" size="sm">
            + Module
          </Button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-9 col-md-12">
          <div className="border rounded p-2 mb-3">
            <h6 className="fw-bold">Week 1</h6>
            <ul className="list-unstyled ps-3">
              <li>Learning Objectives</li>
              <li>Introduction to the course</li>
              <li>Lesson 1</li>
              <li>Lesson 2</li>
            </ul>
          </div>
          <div className="border rounded p-2">
            <h6 className="fw-bold">Week 2</h6>
            <ul className="list-unstyled ps-3">
              <li>Learning Objectives</li>
              <li>Lesson 1</li>
              <li>Lesson 2</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-3 d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
