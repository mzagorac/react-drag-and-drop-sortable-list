import React from "react";
import "./DragItem.css";

export default function DragItem({ children, id }) {
  function dragStartHandler(e) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text", e.target.id);
  }

  return (
    <div id={id} className="drag-item" draggable onDragStart={dragStartHandler}>
      {children}
    </div>
  );
}
