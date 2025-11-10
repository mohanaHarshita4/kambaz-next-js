"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../../store";
import { updateAssignment } from "../reducer";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const assignment = useSelector((state: RootState) =>
    state.assignments.assignments.find(
      (a) => a.course === cid && a.id === aid
    )
  );

  const [form, setForm] = useState(
    assignment || {
      id: aid as string,
      course: cid as string,
      title: "",
      description: "",
      available: "",
      due: "",
      points: 0,
    }
  );

  if (!assignment) {
    return (
      <div className="p-4 text-danger">
        <h5>Assignment not found.</h5>
        <Link href={`/Courses/${cid}/Assignments`} passHref>
          <Button variant="outline-secondary" className="mt-3">
            ← Back to Assignments
          </Button>
        </Link>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    dispatch(updateAssignment(form));
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <Card className="p-4 m-4 shadow-sm">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-semibold text-dark mb-0">
          {form.title || "Assignment Details"}
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
          <Form.Control
            name="title"
            value={form.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            name="points"
            value={form.points}
            onChange={handleChange}
          />
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Available From</Form.Label>
              <Form.Control
                name="available"
                value={form.available}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control
                name="due"
                value={form.due}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <div className="d-flex justify-content-end mt-3">
          <Link href={`/Courses/${cid}/Assignments`} passHref>
            <Button variant="secondary" className="me-2">
              Cancel
            </Button>
          </Link>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </Card>
  );
}
