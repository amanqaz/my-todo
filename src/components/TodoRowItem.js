function TodoRowItem({
  rowNumber,
  rowDescription,
  rowAssigned,
  deleteTodo,
  editTodo,
}) {
  return (
    <tr>
      <th scope="row">{rowNumber}</th>
      <td>{rowDescription}</td>
      <td>{rowAssigned}</td>

      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            if (window.confirm("Are you sure you want to delete this todo?")) {
              deleteTodo(rowNumber);
            }
          }}
        >
          Delete
        </button>
      </td>

      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={(e) => {
            e.stopPropagation();
            editTodo({
              rowNumber,
              rowAssigned,
              rowDescription,
            });
          }}
        >
          Edit
        </button>
      </td>

      <td>
        <span className="text-muted">Upload Photo</span>
      </td>
    </tr>
  );
}

export default TodoRowItem;
