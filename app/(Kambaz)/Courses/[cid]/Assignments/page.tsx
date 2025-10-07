"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="p-3">
      <h2>Assignments</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search bar */}
        <div className="d-flex align-items-center w-50">
          <FaSearch className="me-2 text-secondary" />
          <FormControl placeholder="Search for Assignments" />
        </div>

        {/* Buttons on right */}
        <div>
          <Button variant="secondary" className="me-2">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      {/* Assignment List */}
      <ListGroup className="rounded-0">
        <ListGroupItem className="border-start border-success">
          <Link href="/Courses/1234/Assignments/1" className="text-decoration-none">
            <h5>A1 - React Basics</h5>
            <p className="text-secondary">
              Due Oct 15 | 100 pts | Available Oct 1
            </p>
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-start border-success">
          <Link href="/Courses/1234/Assignments/2" className="text-decoration-none">
            <h5>A2 - CSS & Bootstrap</h5>
            <p className="text-secondary">
              Due Oct 22 | 100 pts | Available Oct 10
            </p>
          </Link>
        </ListGroupItem>
        <ListGroupItem className="border-start border-success">
          <Link href="/Courses/1234/Assignments/3" className="text-decoration-none">
            <h5>A3 - JavaScript</h5>
            <p className="text-secondary">
              Due Oct 29 | 100 pts | Available Oct 15
            </p>
          </Link>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
