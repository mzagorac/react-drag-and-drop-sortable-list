import React, { useState } from "react";
import { findDomElement } from "../utils";
import "./DragArea.css";

export default function DragArea({ children }) {
  const [user, setUser] = useState();

  function dropHandler(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");

    const draggedElement = document.getElementById(data);
    const parent = document.getElementById("target");

    if (parent === user) {
      e.target.appendChild(document.getElementById(data));
    } else {
      parent.insertBefore(draggedElement, user);
    }
  }

  function dragOverHandler(e) {
    e.preventDefault();

    setUser(findDomElement(e.target));
  }

  return (
    <div
      id="target"
      className="drag-area"
      onDragOver={dragOverHandler}
      onDrop={dropHandler}
    >
      {children}
    </div>
  );
}
