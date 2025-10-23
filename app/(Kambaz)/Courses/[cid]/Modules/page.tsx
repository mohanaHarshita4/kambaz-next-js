"use client";

import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules.filter((m: any) => m.course === cid);

  return (
    <div id="wd-modules" className="container-fluid">
      {/* Top Controls */}
      <ModulesControls />
      <br /><br /><br /><br />

      {/* Render each module dynamically */}
      <ListGroup className="rounded-0">
        {modules.map((module: any) => (
          <ListGroupItem
            key={module.id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            {/* Module Header */}
            <div className="wd-title p-3 ps-2 bg-secondary fw-bold d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
              <ModuleControlButtons />
            </div>

            {/* Lessons under this module */}
            <ListGroup className="wd-lessons rounded-0">
              {module.lessons?.map((lesson: any) => (
                <ListGroupItem
                  key={lesson.id}
                  className="wd-lesson p-3 ps-1 d-flex align-items-center"
                >
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name}
                  <LessonControlButtons />
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
