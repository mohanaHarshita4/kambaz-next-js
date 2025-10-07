"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AssignmentEditor() {
  return (
    <div className="container mt-4">
      <h2>Assignment Editor</h2>
      <hr />

      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3" controlId="assignmentName">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="Enter assignment name" />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3" controlId="assignmentDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Enter assignment description" />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3" controlId="assignmentPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" placeholder="100" />
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-3" controlId="assignmentGroup">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select>
            <option>Assignments</option>
            <option>Quizzes</option>
            <option>Exams</option>
          </Form.Select>
        </Form.Group>

        {/* Display Grade As */}
        <Form.Group className="mb-3" controlId="displayGrade">
          <Form.Label>Display Grade As</Form.Label>
          <Form.Select>
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-3" controlId="submissionType">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select>
            <option>Online</option>
            <option>On Paper</option>
            <option>No Submission</option>
          </Form.Select>
        </Form.Group>

        {/* Available Dates */}
        <Form.Group className="mb-3" controlId="dueDate">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="availableFrom">
          <Form.Label>Available From</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="untilDate">
          <Form.Label>Until</Form.Label>
          <Form.Control type="date" />
        </Form.Group>

        {/* Options (checkboxes) */}
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="This is a group assignment" />
          <Form.Check type="checkbox" label="Require peer reviews" />
          <Form.Check type="checkbox" label="Enable plagiarism check" />
        </Form.Group>

        {/* Save & Cancel */}
        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">Save</Button>
          <Button variant="secondary" type="button">Cancel</Button>
        </div>
      </Form>
    </div>
  );
}
