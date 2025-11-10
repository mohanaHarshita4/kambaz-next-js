"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [modules, setModules] = useState<any[]>(db.modules || []);
  const [moduleName, setModuleName] = useState("");

  const addModule = () => {
    if (!moduleName.trim()) return;
    const newModule = {
      id: Date.now().toString(),
      name: moduleName,
      lessons: [],
      editing: false,
    };
    setModules([...modules, newModule]);
    setModuleName("");
  };

  // Delete a module by ID
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m.id !== moduleId));
  };

  // Enable edit mode for a module
  const editModule = (moduleId: string) => {
    setModules(
      modules.map((m) =>
        m.id === moduleId ? { ...m, editing: true } : { ...m, editing: false }
      )
    );
  };

  // Update module name as user types
  const updateModule = (module: any) => {
    setModules(modules.map((m) => (m.id === module.id ? module : m)));
  };

  return (
    <div id="wd-modules" className="container-fluid">
      {/* Top Controls */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <br />
      <br />
      <br />

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

              {/* Editable or static module name */}
              {!module.editing ? (
                module.name
              ) : (
                <FormControl
                  className="w-50 d-inline-block"
                  defaultValue={module.name}
                  onChange={(e) =>
                    updateModule({ ...module, name: e.target.value })
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      updateModule({ ...module, editing: false });
                    }
                  }}
                />
              )}

              {/* Action buttons */}
              <ModuleControlButtons
                moduleId={module.id}
                deleteModule={deleteModule}
                editModule={editModule}
              />
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
