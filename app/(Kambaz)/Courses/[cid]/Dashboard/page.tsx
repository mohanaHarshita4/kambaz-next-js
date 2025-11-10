"use client";

import { Row, Col, Card, Button, Form } from "react-bootstrap";
import Link from "next/link";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}: any) {
  return (
    <div className="p-4" id="wd-dashboard">

      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <h5>
        New Course
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={updateCourse}
        >
          Update
        </button>
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
      </h5>
      <br />

      <Form.Group className="mb-2">
        <Form.Control
          type="text"
          id="wd-course-name"
          value={course.name}
          placeholder="Enter course name"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Control
          as="textarea"
          id="wd-course-description"
          value={course.description}
          placeholder="Enter course description"
          onChange={(e) =>
            setCourse({ ...course, description: e.target.value })
          }
        />
      </Form.Group>

      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          {courses.map((course: any) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "270px" }}
            >
              <Card className="h-100">
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image || "/images/reactjs.jpg"}
                    width="100%"
                    height={160}
                    alt={course.name}
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>

                    <Button variant="primary" className="me-2">
                      Go
                    </Button>

                    <Button
                      variant="warning"
                      id="wd-edit-course-click"
                      className="me-2 float-end"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      variant="danger"
                      className="float-end"
                      id="wd-delete-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
