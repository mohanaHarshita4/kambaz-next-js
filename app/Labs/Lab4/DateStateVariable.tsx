'use client';
import { useState, useEffect } from "react";
import { FormControl } from "react-bootstrap";

export default function DateStateVariable() {
  // initialize as null first
  const [startDate, setStartDate] = useState<Date | null>(null);

  // run only on the client after first render
  useEffect(() => {
    setStartDate(new Date());
  }, []);

  function toHtmlDate(date: Date | null) {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  }

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>

      {/* Only render the date once it’s ready */}
      <h3>{startDate ? JSON.stringify(startDate) : "Loading..."}</h3>
      <h3>{toHtmlDate(startDate)}</h3>

      <FormControl
        type="date"
        value={toHtmlDate(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
    </div>
  );
}
