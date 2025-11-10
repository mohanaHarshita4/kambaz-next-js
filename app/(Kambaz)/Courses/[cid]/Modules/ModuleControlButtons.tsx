import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash, FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      {/* Edit button (Pencil icon) */}
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary fs-5"
        style={{ cursor: "pointer" }}
      />

      {/* Trashcan icon */}
      <FaTrash
        className="text-danger fs-5"
        style={{ cursor: "pointer" }}
        onClick={() => deleteModule(moduleId)}
      />

      {/* Checkmark */}
      <GreenCheckmark />

      {/* Plus icon */}
      <BsPlus className="fs-4" style={{ cursor: "pointer" }} />

      {/* Ellipsis icon */}
      <IoEllipsisVertical className="fs-4" style={{ cursor: "pointer" }} />
    </div>
  );
}
