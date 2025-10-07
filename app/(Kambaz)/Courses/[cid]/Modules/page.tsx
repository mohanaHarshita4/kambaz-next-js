"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      {/* Top controls (Collapse All, View Progress, etc.) */}
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />

      {/* Modules List */}
      <ListGroup className="rounded-0" id="wd-modules">
        {/* Week 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 1</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LEARNING OBJECTIVES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Introduction to the course
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Learn what is Web Development
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LESSON 1
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LESSON 2
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 3 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 3</div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              JavaScript Fundamentals
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Variables, data types, and operators
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Functions and control flow
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              DOM Manipulation and Events
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
