"use client";

import { use } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import {
  addAssignment,
  deleteAssignment,
} from "./reducer";
import { useState } from "react";
import {
  FaSearch,
  FaPlus,
  FaTrash,
  FaEdit,
  FaClock,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import {
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineAssignment } from "react-icons/md";

interface AssignmentsProps {
  params: Promise<{ cid: string }>;
}

export default function Assignments({ params }: AssignmentsProps) {
  const { cid } = use(params);
  const dispatch = useDispatch<AppDispatch>();
  const assignments = useSelector(
    (state: RootState) => state.assignments.assignments
  ).filter((a) => a.course === cid);

  const [search, setSearch] = useState("");

  const handleAddAssignment = () => {
    const newAssignment = {
      id: uuidv4(),
      course: cid,
      title: "New Assignment",
      description: "New Assignment Description",
      available: "Enter Date",
      due: "Enter Date",
      points: 100,
    };
    dispatch(addAssignment(newAssignment));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteAssignment(id));
  };

  const filtered = assignments.filter((a) =>
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
          <Button variant="danger" onClick={handleAddAssignment}>
            <FaPlus /> Assignment
          </Button>
        </Col>
      </Row>

      <ListGroup className="border">
        {filtered.map(({ id, title, available, due, points }) => (
          <ListGroup.Item
            key={id}
            className="d-flex justify-content-between align-items-center ps-3 pe-2 py-3 bg-white"
            style={{
              borderLeft: "4px solid green",
              borderRight: "none",
              borderTop: "none",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <div className="d-flex align-items-start w-100">
              <MdOutlineAssignment className="me-3 fs-4 text-success" />
              <div className="flex-grow-1">
                <Link
                  href={`/Courses/${cid}/Assignments/${id}`}
                  className="fw-bold text-decoration-none text-dark d-block"
                >
                  {title}
                </Link>
                <div className="text-muted small mt-1">
                  <FaClock className="me-1 text-secondary" />
                  Available: {available} &nbsp;|&nbsp;
                  <FaCalendarAlt className="me-1 text-secondary" />
                  Due: {due} &nbsp;|&nbsp;
                  <FaStar className="me-1 text-secondary" /> {points} pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <Link href={`/Courses/${cid}/Assignments/${id}`} passHref>
                <Button variant="outline-primary" size="sm" className="me-2">
                  <FaEdit />
                </Button>
              </Link>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDelete(id)}
              >
                <FaTrash />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
