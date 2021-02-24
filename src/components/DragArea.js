import React, { useState, useRef } from "react";
import { findDomElement, reorderArrayElements } from "../utils";
import "./DragArea.css";

export default function DragArea({
  children,
  users,
  setUsers,
  draggedElement,
}) {
  const [draggedOverEl, setDraggedOverEl] = useState();
  const targetEl = useRef();

  function dropHandler(e) {
    e.preventDefault();

    if (draggedElement && draggedOverEl) {
      const reorderedUsers = reorderArrayElements(
        users,
        Number(draggedElement.id),
        Number(draggedOverEl.id)
      );
      setUsers(reorderedUsers);
    }

    draggedElement.style = "";
  }

  function dragOverHandler(e) {
    e.preventDefault();

    setDraggedOverEl(findDomElement(e.target));
  }

  return (
    <div
      ref={targetEl}
      id="target"
      className="drag-area"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      {children}
    </div>
  );
}
