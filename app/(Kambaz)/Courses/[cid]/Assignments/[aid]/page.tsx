"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../Database";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  const assignment = (db.assignments as any[]).find(
    (a: any) => a.course === cid && a.id === aid
  );

  if (!assignment) {
    return (
      <div className="p-4 text-danger">
        <h5>⚠️ Assignment not found.</h5>
        <Link href={`/Courses/${cid}/Assignments`} passHref>
          <Button variant="outline-secondary" className="mt-3">
            ← Back to Assignments
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <Card className="p-4 m-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-semibold text-dark mb-0">
          {assignment.title || "Assignment Details"}
        </h4>
        <Link href={`/Courses/${cid}/Assignments`} passHref>
          <Button variant="outline-secondary" size="sm">
            ← Back to Assignments
          </Button>
        </Link>
      </div>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            defaultValue={`This assignment is worth ${assignment.points} points.\nAvailable: ${assignment.available}\nDue: ${assignment.due}.`}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={assignment.points} />
        </Form.Group>

        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="text" defaultValue={assignment.available} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="text" defaultValue={assignment.due} />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Display Grade As</Form.Label>
              <Form.Select defaultValue="Points">
                <option value="Points">Points</option>
                <option value="Percentage">Percentage</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end mt-3">
          <Link href={`/Courses/${cid}/Assignments`} passHref>
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
          </Link>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </Card>
  );
}
