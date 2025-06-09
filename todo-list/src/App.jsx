import React, { useState, useEffect, useRef, useMemo } from "react";

function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [message, setMessage] = useState("");

  const inputRef = useRef();

  // Focus the input box on component mount
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Show message whenever a new task is added
  useEffect(() => {
    if (taskList.length > 0) {
      setMessage("✅ Task Added!");
      const timeout = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(timeout);
    }
  }, [taskList]);

  // Count only when taskList changes
  const totalTasks = useMemo(() => {
    console.log("Calculating task count...");
    return taskList.length;
  }, [taskList]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
      inputRef.current.focus();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 React Hooks Todo</h2>

      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddTask}>Add Task</button>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <h4>Total Tasks: {totalTasks}</h4>

      <ul>
        {taskList.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;