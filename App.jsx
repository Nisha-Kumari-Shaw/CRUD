import React, { useEffect, useState } from "react";
import API from "./api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditModal from "./components/EditModal";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Load all tasks
  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const handleAdd = async (task) => {
    await API.post("/tasks", task);
    fetchTasks();
  };

  // Delete task
  const handleDelete = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  // Edit task
  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const handleSaveEdit = async (updatedTask) => {
    await API.put(`/tasks/${updatedTask.id}`, updatedTask);
    fetchTasks();
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
      <EditModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        currentTask={selectedTask}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default App;
