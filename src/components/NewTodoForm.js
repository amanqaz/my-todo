import React, { useState, useEffect } from "react";

function NewTodoForm({ addTodo, enableEdit, editTododata }) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  useEffect(() => {
    if (enableEdit && editTododata) {
      setDescription(editTododata.rowDescription || "");
      setAssigned(editTododata.rowAssigned || "");
    }
  }, [enableEdit, editTododata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "" || assigned.trim() === "") return;
    addTodo(description, assigned);
    setDescription("");
    setAssigned("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Assigned To</label>
        <input
          type="text"
          className="form-control"
          value={assigned}
          onChange={(e) => setAssigned(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">
        {enableEdit ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default NewTodoForm;
