"use client";

import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FormControl } from "react-bootstrap";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const [title, setTitle] = useState("");

  const fetchAssignment = async () => {
    const data = await client.fetchAssignment();
    setAssignment(data);
    setTitle(data.title);
  };

  const updateTitle = async () => {
    const updated = await client.updateTitle(title);
    setAssignment(updated);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects Asynchronously</h3>

      <FormControl
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2"
      />
      <button id="wd-update-title" onClick={updateTitle}>
        Update Title
      </button>

      <pre className="mt-2">{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
