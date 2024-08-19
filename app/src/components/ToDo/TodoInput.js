import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoInput({ setTasks, theme }) {
  const [textTodo, setTextTodo] = useState("");

  const handleClickAddTask = () => {
    const newTask = {
      id: uuidv4(),
      text: textTodo,
      status: false,
    };
    if (textTodo.trim().length !== 0) {
      setTasks((prev) => [newTask, ...prev]);
      
      setTextTodo("");
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClickAddTask();
    }
  };
  const backgroundInput =
    theme === "light"
      ? { backgroundColor: "white" }
      : { backgroundColor: "#25273c" };

  return (
    <div className="todoInputBlock">
      <input
        style={backgroundInput}
        placeholder="Create a new todo..."
        className={`todoInput ${theme}`}
        onChange={(event) => setTextTodo(event.target.value)}
        onKeyDown={handleKeyDown}
        value={textTodo}
      />
    </div>
  );
}
