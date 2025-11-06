import React from "react";

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.title}</span>
            <div className="actions">
              <button onClick={() => onEdit(task)}>Edit</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
