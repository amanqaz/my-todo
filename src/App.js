import React, { useState } from "react";

import NewTodoForm from "./components/NewTodoForm";
import TodoTable from "./components/TodoTable";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [editEnable, setEditEnable] = useState(false);
  const [editTodoData, setEditTodoData] = useState(null);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "Aman" },
    { rowNumber: 2, rowDescription: "Get haircut", rowAssigned: "Vivesh" },
    { rowNumber: 3, rowDescription: "Water the plant", rowAssigned: "Aditya" },
    { rowNumber: 4, rowDescription: "Come Fly with Me", rowAssigned: "Shobit" },
    {
      rowNumber: 5,
      rowDescription: "Get well soon Mamu",
      rowAssigned: "Murli",
    },
  ]);

  //  Add or Update todo
  const addOrUpdateTodo = (description, assigned) => {
    if (editEnable && editTodoData) {
      // update existing todo
      const updatedTodos = todos.map((todo) =>
        todo.rowNumber === editTodoData.rowNumber
          ? { ...todo, rowDescription: description, rowAssigned: assigned }
          : todo
      );
      setTodos(updatedTodos);
      setEditEnable(false);
      setEditTodoData(null);
    } else {
      // add new todo
      const rowNumber =
        todos.length > 0 ? todos[todos.length - 1].rowNumber + 1 : 1;
      const newTodo = {
        rowNumber,
        rowDescription: description,
        rowAssigned: assigned,
      };
      setTodos([...todos, newTodo]);
    }

    setShowAddTodoForm(false);
  };

  // Delete todo
  const deleteTodo = (deleteTodoRowNumber) => {
    const newTodos = todos
      .filter((todo) => todo.rowNumber !== deleteTodoRowNumber)
      .map((todo, index) => ({ ...todo, rowNumber: index + 1 }));
    setTodos(newTodos);
  };

  // Trigger edit mode
  const editTodo = (todo) => {
    setShowAddTodoForm(true);
    setEditEnable(true);
    setEditTodoData(todo);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />

          <button
            onClick={() => {
              setShowAddTodoForm(!showAddTodoForm);
              setEditEnable(false);
              setEditTodoData(null);
            }}
            className="btn btn-primary mt-3"
          >
            {showAddTodoForm ? "Close Todo" : "New Todo"}
          </button>

          {showAddTodoForm && (
            <NewTodoForm
              addTodo={addOrUpdateTodo}
              enableEdit={editEnable}
              editTododata={editTodoData}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
