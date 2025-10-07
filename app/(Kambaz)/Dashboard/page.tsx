"use client";

import Link from "next/link";
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardText, Button } from "react-bootstrap";

export default function Dashboard() {
  const courses = [
    { id: "1234", title: "CS1234 React JS", img: "/images/reactjs.jpg" },
    { id: "2345", title: "CS2345 Node", img: "/images/nodejs.jpg" },
    { id: "3456", title: "CS3456 CSS", img: "/images/css.jpg" },
    { id: "4567", title: "CS5600 Web Development", img: "/images/1.png" },
    { id: "5678", title: "CS5600 Web Development2", img: "/images/2.png" },
    { id: "6789", title: "CS5600 Web Development3", img: "/images/3.png" },
    { id: "7890", title: "CS5600 Web Development4", img: "/images/4.png" },
    { id: "0123", title: "CS5600 Web Development5", img: "/images/5.png" },
    { id: "0124", title: "CS5600 Web Development6", img: "/images/6.png" },
  ];

  return (
    <div id="wd-Dashboard">
      <h1 id="wd-Dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-Dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-Dashboard-courses">
        <Row xs={1} md={4} className="g-4">
          {courses.map((c) => (
            <Col key={c.id} className="wd-Dashboard-course" style={{ width: "270px" }}>
              <Card>
                <Link
                  href={`/Courses/${c.id}/Home`}
                  className="wd-Dashboard-course-link text-decoration-none text-dark"
                >
                  <CardImg variant="top" src={c.img} width="100%" height={160} />
                  <CardBody>
                    <CardTitle className="wd-Dashboard-course-title text-nowrap overflow-hidden">
                      {c.title}
                    </CardTitle>
                    <CardText
                      className="wd-Dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      Full Stack software developer
                    </CardText>
                    <Button variant="primary">Go</Button>
                  </CardBody>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
