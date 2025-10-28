import TodoRowItem from "./TodoRowItem";

function TodoTable({ todos = [], deleteTodo, editTodo }) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Assigned User</th>
          <th>Action</th>
          <th>Edit</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoRowItem
              key={todo.rowNumber}
              rowNumber={todo.rowNumber}
              rowDescription={todo.rowDescription}
              rowAssigned={todo.rowAssigned}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center text-muted">
              No todos found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default TodoTable;
