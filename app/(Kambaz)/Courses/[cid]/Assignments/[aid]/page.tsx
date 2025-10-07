"use client";

import { use } from "react";
import { Form, Button } from "react-bootstrap";

export default function EditAssignment({
  params,
}: {
  params: Promise<{ aid: string }>;
}) {
  // unwrap params safely (Next.js 15+ style)
  const { aid } = use(params);

  return (
    <div id="wd-edit-assignment" className="p-4" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4">Edit Assignment</h2>

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={`A${aid}`}
            placeholder="Enter assignment name"
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter assignment description"
            defaultValue="The assignment is available online..."
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue="100" />
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>PROJECTS</option>
          </Form.Select>
        </Form.Group>

        {/* Display Grade */}
        <Form.Group className="mb-3">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select defaultValue="Percentage">
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-3">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </Form.Select>
          <div className="ms-3 mt-2">
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>

        {/* Assign To */}
        <Form.Group className="mb-3">
          <Form.Label>Assign To</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>

        {/* Dates */}
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="datetime-local" defaultValue="2025-05-13T23:59" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Available From</Form.Label>
          <Form.Control type="datetime-local" defaultValue="2025-05-06T00:00" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Until</Form.Label>
          <Form.Control type="datetime-local" defaultValue="2025-05-20T23:59" />
        </Form.Group>

        {/* Save button */}
        <Button variant="danger" className="mt-3">
          Save
        </Button>
      </Form>
    </div>
  );
}
