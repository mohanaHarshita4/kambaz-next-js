"use client";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignment-editor">
      <h2>Edit Assignment</h2>

      <div>
        <label>Title</label>
        <input type="text" defaultValue="A1 - ENV + HTML" />
      </div>

      <div>
        <label>Details</label>
        <textarea rows={4} defaultValue="This assignment is available online. Submit your project link here." />
      </div>

      <div>
        <label>Points</label>
        <input type="number" defaultValue={100} />
      </div>

      <div>
        <label>Submission</label>
        <select defaultValue="Text Entry">
          <option>Text Entry</option>
          <option>File Upload</option>
          <option>Website URL</option>
        </select>
      </div>

      <div>
        <label>Due Date</label>
        <input type="date" />
      </div>

      <div>
        <label>Available From</label>
        <input type="date" />
      </div>

      <div>
        <label>Until</label>
        <input type="date" />
      </div>

      <br />
      <button>Save</button>
      <button style={{ marginLeft: "10px" }}>Cancel</button>
    </div>
  );
}
