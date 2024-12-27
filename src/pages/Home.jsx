import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (task) => {
    setTodos([...todos, { task }]);
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter(todo => todo !== todoToDelete));
  };

  const updateTodo = (todoToUpdate) => {
    setEditingTodo(todoToUpdate);
  };

  return (
    <div className="p-6">
      <TodoForm onSubmit={editingTodo ? (task) => {
        setTodos(todos.map(todo => todo === editingTodo ? { task } : todo));
        setEditingTodo(null);
      } : addTodo} existingTodo={editingTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={updateTodo} />
    </div>
  );
};

export default Home;
