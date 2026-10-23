import React from "react";

function MonitorList({ toDos, onToggle, onDelete }) {
  return (
    <ul className="toDo-list">
      {toDos.map((toDo) => (
        <li
          className={`toDo-item${toDo.completed ? " checked" : ""}`}
          key={toDo.id}
        >
          <span className="toDo-text" onClick={() => onToggle(toDo.id)}>
            {toDo.title}
          </span>
          <button
            className="delete-button"
            type="button"
            onClick={() => onDelete(toDo.id)}
            aria-label={`Delete ${toDo.title}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MonitorList;
