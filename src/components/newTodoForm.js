import React, { useEffect, useState } from "react";
function NewTodoForm(props) {
  const [description, setDescription] = useState("");
  const [assigned, setAssigned] = useState("");

  // const DescriptionChange = (event)=>{
  //     console.log("Description",event.target.value);
  //     setDescription(event.target.value)
  // }

  // const AssignnedChange = (event)=>{
  //     console.log("AssignChange",event.target.value)
  //     setAssigned(event.target.value)
  // }

  const submitTodo = () => {
    if (description !== "" && assigned !== "") {
      props.addTodo(description, assigned);
      setAssigned("");
      setDescription("");
    }
  };

  useEffect(() => {
    console.log(props.editEnable);
    if (props.editTododata != null && props.editEnable) {
      setAssigned(props.editTododata.rowAssigned || "");
      setDescription(props.editTododata.rowDescription || "");
    }
  }, [props.editEnable, props.editTododata]);

  return (
    <div className="mt-5">
      <form>
        <div className="mt-3">
          <label className="form-label">Assigned</label>
          <input
            type="text"
            className="form-control"
            required
            onChange={(event) => setAssigned(event.target.value)}
            value={assigned}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          {/* <input text="text" className="form-control" required /> */}
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          {props.editEnable ? "Save" : "Add todo"}
        </button>
      </form>
    </div>
  );
}
export default NewTodoForm;
