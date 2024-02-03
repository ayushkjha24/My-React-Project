function AddTodo() {
  return <div>
    <div class="row todo-row">
      <div class="col-6">
        <input type="text" placeholder="Enter Todo Here " id="inputText" />
      </div>
      <div class="col-4">
        <input type="date" id="inputDate" />
      </div>
      <div class="col-2">
        <button type="button" class=" btn btn-success">Add</button>
      </div>
    </div>
  </div>
}
export default AddTodo;