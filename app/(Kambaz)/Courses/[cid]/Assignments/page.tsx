"use client";

import { use } from "react";
import Link from "next/link";
import { useState } from "react";
import * as db from "../../../Database";
import {
  FaSearch,
  FaPlus,
  FaCheckCircle,
  FaEllipsisV,
  FaAngleDown,
  FaClock,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import {
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";

interface AssignmentsProps {
  params: Promise<{ cid: string }>;
}

function GripDots() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center me-3"
      style={{ width: "14px", height: "18px" }}
    >
      {Array.from({ length: 4 }).map((_, row) => (
        <div
          key={row}
          className="d-flex justify-content-between w-100 mb-1"
          style={{ lineHeight: 0 }}
        >
          <div
            className="rounded-circle"
            style={{ width: "4px", height: "4px", backgroundColor: "#222" }}
          ></div>
          <div
            className="rounded-circle"
            style={{ width: "4px", height: "4px", backgroundColor: "#222" }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default function Assignments({ params }: AssignmentsProps) {
  const { cid } = use(params);
  const [search, setSearch] = useState("");

  // fallback to all assignments if course not matched
  const allAssignments = db.assignments as any[];
  const assignments = allAssignments.filter(
    (a: any) => a.course === cid || a.course === "1234"
  );

  const filtered = assignments.filter((a: any) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 bg-light">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-semibold text-dark mb-0">Assignments</h4>
        <Link href={`/Courses/${cid}/Dashboard`} passHref>
          <Button variant="outline-secondary" size="sm">
            ← Back to Dashboard
          </Button>
        </Link>
      </div>

      <Row className="align-items-center mb-3">
        <Col md={6}>
          <InputGroup>
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
            <FormControl
              placeholder="Search for Assignments"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={6} className="text-end">
          <Button variant="light" className="border me-2 text-dark">
            <FaPlus /> Group
          </Button>
          <Button variant="danger">
            <FaPlus /> Assignment
          </Button>
        </Col>
      </Row>

      <div className="d-flex align-items-center justify-content-between border px-3 py-2 bg-white">
        <div className="d-flex align-items-center fw-semibold">
          <GripDots />
          <FaAngleDown className="me-2" />
          ASSIGNMENTS
        </div>
        <div className="d-flex align-items-center">
          <span className="border rounded-pill px-3 py-1 small text-muted me-3 bg-light">
            40% of Total
          </span>
          <FaPlus className="text-secondary me-3" />
          <FaEllipsisV className="text-secondary" />
        </div>
      </div>

      <ListGroup className="border border-top-0">
        {filtered.map(({ id, title, available, due, points }: any) => (
          <ListGroup.Item
            key={id}
            className="d-flex justify-content-between align-items-center ps-3 pe-2 py-3 rounded-0 bg-white"
            style={{
              borderLeft: "4px solid green",
              borderRight: "none",
              borderTop: "none",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <div className="d-flex align-items-start w-100">
              <GripDots />
              <MdOutlineAssignment className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/${id}`}
                  className="fw-bold text-decoration-none text-dark d-block"
                >
                  {title}
                </Link>

                <div className="text-muted small mt-1">
                  Multiple Modules &nbsp;|&nbsp;
                  <FaClock className="me-1 text-secondary" />
                  <strong>Not available until</strong> {available} &nbsp;|&nbsp;
                  <FaCalendarAlt className="me-1 text-secondary" />
                  <strong>Due</strong> {due} &nbsp;|&nbsp;
                  <FaStar className="me-1 text-secondary" /> {points} pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FaCheckCircle className="text-success me-3" size={18} />
              <FaEllipsisV className="text-secondary" />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
