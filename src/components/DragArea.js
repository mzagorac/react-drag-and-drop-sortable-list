import React, { useState, useRef } from "react";
import { findDomElement } from "../utils";
import "./DragArea.css";

export default function DragArea({ children, users, draggedElement }) {
  const [user, setUser] = useState();
  const targetEl = useRef();

  function dropHandler(e) {
    e.preventDefault();

    const parent = targetEl.current;

    if (parent === user) {
      e.target.appendChild(draggedElement);
    } else {
      parent.insertBefore(draggedElement, user);
    }

    draggedElement.style = "";
  }

  function dragOverHandler(e) {
    e.preventDefault();

    setUser(findDomElement(e.target));
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
