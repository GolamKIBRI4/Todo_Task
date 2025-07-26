import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeTodo, editTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  const [editTodoFormVisibility, setEditTodoFormVisibility] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editId, setEditId] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editPriority, setEditPriority] = useState(""); 

  return (
    <div className="todo-div">
        <h2 style={{ color: "white" }}>Todo List</h2>
      {todos.map((todo) => (
        <div className="todo-card" key={todo.id}>
          <h3 style={{ color: "white" }}>{todo.title}</h3>
          <p style={{ color: "white" }}>{todo.description}</p>
          <p style={{ color: "white" }}>Due: {todo.dueDate}</p>
          <p style={{ color: "white" }}>Priority: {todo.priority}</p>
          <p style={{ color: "white" }}>
            Status: {todo.completed ? "Completed" : "Pending"}
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
            <button
              className="login-form-button"
              onClick={() => {
                setEditTodoFormVisibility(todo.id);
                setEditTitle(todo.title);
                setEditDescription(todo.description);
                setEditId(todo.id);
              }}
            >
              Edit
            </button>

            <button
              className="login-form-button"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </button>
          </div>

          {editTodoFormVisibility === todo.id && (
            <div className="login-div">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(
                    editTodo({
                      id: editId,
                      title: editTitle,
                      description: editDescription,
                      dueDate: editDueDate,
                      priority: editPriority,
                      completed: todo.completed,
                    })
                  );
                  setEditTodoFormVisibility(null);
                }}
                className="login-form"
              >
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                  name="description"
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <label htmlFor="dueDate">Due Date</label>
                <input
                  name="dueDate"
                  type="date"
                  value={editDueDate}
                  onChange={(e) => setEditDueDate(e.target.value)}
                />
                <label htmlFor="priority">Priority</label>
                <select
                  name="priority"
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br />

                <button type="submit" className="login-form-button">
                  Save
                </button>
                <button
                  type="button"
                  className="login-form-button"
                  onClick={() => setEditTodoFormVisibility(null)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
