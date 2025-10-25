import React, { useState } from "react";
import "./App.css";
import NewTodoForm from "./components/newTodoForm";
import TodoTable from "./components/TodoTable";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [editEnable, setEditEnable] = useState(false);

  //de stucruring todos
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "feed puppy", rowAssigned: "aman" },
    { rowNumber: 2, rowDescription: "Get hair cut", rowAssigned: "vivesh" },
    { rowNumber: 3, rowDescription: "water the plant", rowAssigned: "Aditya" },
    { rowNumber: 4, rowDescription: "Come FLy with Me", rowAssigned: "Shobit" },
    {
      rowNumber: 5,
      rowDescription: "Get Well soon Mamu",
      rowAssigned: "Murli Prasad",
    },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodos = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todo) => [...todo, newTodos]); // ...todo is destructuring
    setShowAddTodoForm(!showAddTodoForm);

    // todos.push(newTodos);
    // console.log(newTodos)
  };
  const deleteTodo = (deleteTodoRowNumber) => {
    // let filtered = todos.filter(function (value){
    //   return value.rowNumber !== deleteTodoRowNumber;
    // })
    // const reIndexed = filtered.map((todo, index) => ({
    //   ...todo,
    //   rowNumber: index + 1, // renumber from 1 upwards
    // }));

    let newTodos = [];
    let counter = 1;

    for (const todo of todos) {
      if (todo.rowNumber !== deleteTodoRowNumber) {
        // keep only the non-deleted ones
        newTodos.push({
          ...todo,
          rowNumber: counter++, // assign new row number on the fly
        });
      }
    }
    setTodos(newTodos);
  };

  const editTodo = (todoUpdate) => {
    setShowAddTodoForm(!showAddTodoForm);
    setEditEnable(!editEnable);
    const comingTodo = todos.find((e) => e.rowNumber === todoUpdate.rowNumber);

    console.log("Received todo:", comingTodo);
    console.log(comingTodo?.rowAssigned);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />

          <button
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
            className="btn btn-primary"
          >
            {showAddTodoForm ? "Close Todo" : "New Todo"}
          </button>

          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
