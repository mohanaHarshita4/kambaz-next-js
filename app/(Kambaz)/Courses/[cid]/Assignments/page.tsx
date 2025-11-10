"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import { deleteAssignment } from "./reducer";
import {
  FaSearch,
  FaPlus,
  FaEllipsisV,
  FaAngleDown,
  FaClock,
  FaCalendarAlt,
  FaStar,
  FaTrash,
} from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import {
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

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

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const assignments = useSelector(
    (state: RootState) => state.assignments.assignments
  ).filter((a) => a.course === cid);

  const [search, setSearch] = useState("");
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = assignments.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id: string) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const confirmDelete = () => {
    if (deleteId) dispatch(deleteAssignment(deleteId));
    setShowDelete(false);
  };

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
          <Button
            variant="danger"
            onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
          >
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
          <FaEllipsisV className="text-secondary" />
        </div>
      </div>

      <ListGroup className="border border-top-0">
        {filtered.map(({ id, title, available, due, points }) => (
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
                  <strong>Available</strong> {available} &nbsp;|&nbsp;
                  <FaCalendarAlt className="me-1 text-secondary" />
                  <strong>Due</strong> {due} &nbsp;|&nbsp;
                  <FaStar className="me-1 text-secondary" /> {points} pts
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center">
              <FaTrash
                className="text-danger me-3"
                size={18}
                role="button"
                onClick={() => handleDelete(id)}
              />
              <FaEllipsisV className="text-secondary" />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this assignment?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
