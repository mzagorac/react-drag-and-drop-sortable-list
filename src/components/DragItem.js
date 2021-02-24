import React from "react";
import "./DragItem.css";

export default function DragItem({ children, id, index }) {
  function dragStartHandler(e) {
    e.target.style.opacity = "0.3";

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.id);
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
