function TodoRowItem(props) {
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.rowDescription}</td>
      <td>{props.rowAssigned}</td>

      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            e.stopPropagation(); // 👈 prevent row-level click if added later
            if (window.confirm("Are you sure you want to delete this todo?")) {
              props.deleteTodo(props.rowNumber);
            }
          }}
        >
          Delete
        </button>
      </td>

      <td>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            e.stopPropagation(); // 👈 prevent row-level click if added later
            props.editTodo({
              rowNumber: props.rowNumber,
              rowAssigned: props.rowAssigned,
              rowDescription: props.rowDescription,
            });
          }}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}
export default TodoRowItem;
