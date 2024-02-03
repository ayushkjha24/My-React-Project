function TodoItem({ todoName, todoDate }) {
  return <div class="row todo-row">
    <div class="col-6">
      <h3>{todoName}</h3>
    </div>
    <div class="col-4">
      <h3>{todoDate}</h3>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </div>
}
export default TodoItem;