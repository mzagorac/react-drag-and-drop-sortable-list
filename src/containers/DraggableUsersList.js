import React, { useState } from "react";
import DragArea from "../components/DragArea";
import DragItem from "../components/DragItem";
import usersList from "../data/data.json";
import "./DraggableUsersList.css";

export default function DraggableUsersList() {
  const [users, setUsers] = useState(usersList);
  const [draggedElement, setDraggedEl] = useState(null);

  function handleDraggedEl(el) {
    setDraggedEl(el);
  }

  return (
    <ul>
      <DragArea
        users={users}
        setUsers={setUsers}
        draggedElement={draggedElement}
      >
        {users.map((user, i) => (
          <DragItem id={i} key={user.id} handleDraggedEl={handleDraggedEl}>
            <li>
              <span id="username">{user.name}</span>
              <span id="email">{user.email}</span>
            </li>
          </DragItem>
        ))}
      </DragArea>
    </ul>
  );
}
