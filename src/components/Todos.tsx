import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Todo } from "../types/interfaces";
import TodoList from "./TodoList";

const createEmptyTodo = (): Todo => ({
  id: Math.random().toString(36).substring(2, 15),
  title: "",
  description: "",
  dueDate: "",
  priority: "low",
  completed: false,
});

const Todos = () => {
  const [input, setInput] = useState<Todo>(createEmptyTodo());
  const [formvisibility, setFormVisibility] = useState(false);
       
  const dispatch = useDispatch();

  const toggleFormVisibility = () => setFormVisibility(!formvisibility);   

  const addTodoHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!input.title.trim()) {
      alert("Todo title is required");
      return;
    }
    dispatch(addTodo(input));
    alert("Todo added successfully");
    
    setInput(createEmptyTodo()); // reset with a new ID for next todo
  };

  return (
    <>
        <div className="home-page-left-column">
            <button onClick={toggleFormVisibility} className="login-form-button">
                {formvisibility ? "Hide Form" : "Add Todo"}
            </button>
                   {formvisibility && (<div className="login-div">
               <form onSubmit={addTodoHandler} className='login-form'>
            
                    <label htmlFor="todo">Todo</label>
                    <input
                      name="todo"
                      placeholder="enter a todo"
                      type="text"
                      value={input.title}
                      onChange={(event) =>
                        setInput({ ...input, title: event.target.value })
                      }
                    />
                    <label htmlFor="description">Description</label>
                    <input
                      name="description"
                      placeholder="enter a description"
                      type="text"
                      value={input.description}
                      onChange={(event) =>
                        setInput({ ...input, description: event.target.value })
                      }
                    />
                    <label htmlFor="dueDate">Due Date</label>
                    <input
                      name="dueDate"
                      placeholder="enter a due date"
                      type="date"
                      value={input.dueDate}
                      onChange={(event) =>
                        setInput({ ...input, dueDate: event.target.value })
                      }
                    />
                    <label htmlFor="priority">Priority</label>
                    <select
                      name="priority"
                      value={input.priority}
                      onChange={(event) =>
                        setInput({ ...input, priority: event.target.value })
                      }
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
            
                  <div>
                    <button type="submit" className="login-form-button">Submit</button>
                  </div>
                </form>
                   </div>)}
        </div>
        <div className="home-page-right-column">
           <TodoList />

        </div>
    </>
  );
};

export default Todos;
