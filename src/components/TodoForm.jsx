import { useState } from "react";

const TodoForm = ({ onSubmit, existingTodo }) => {
  const [task, setTask] = useState(existingTodo ? existingTodo.task : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="p-2 w-full rounded bg-gray-700 text-white"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
    </form>
  );
};

export default TodoForm;
