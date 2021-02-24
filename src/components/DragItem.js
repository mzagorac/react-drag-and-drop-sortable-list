import React from "react";
import "./DragItem.css";

export default function DragItem({ children, id, index, handleDraggedEl }) {
  function dragStartHandler(e) {
    e.target.style.opacity = "0.3";

    handleDraggedEl(e.target);

    e.dataTransfer.effectAllowed = "move";
  }

  return (
    <div
      id={id}
      index={index}
      className="drag-item"
      draggable
      onDragStart={dragStartHandler}
    >
      {children}
    </div>
  );
}
