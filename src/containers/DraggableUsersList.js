import React, { useState } from "react";
import DragArea from "../components/DragArea";
import DragItem from "../components/DragItem";
import usersList from "../data/data.json";
import "./DraggableUsersList.css";

export default function DraggableUsersList() {
  const [users] = useState(usersList);
  return (
    <ul>
      <DragArea>
        {users.map((user, i) => (
          <DragItem id={user.id} index={i} key={user.id}>
            <li>
              <span>{user.name}, </span>
              <span>{user.email}</span>
            </li>
          </DragItem>
        ))}
      </DragArea>
    </ul>
  );
}
