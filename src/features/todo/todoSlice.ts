import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types/interfaces';

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        if (action.payload.title) {
            todo.title = action.payload.title;
            }
        if (action.payload.description) {
            todo.description = action.payload.description;
        }
        if (action.payload.dueDate) {
            todo.dueDate = action.payload.dueDate;
        }
        if (action.payload.priority) {
            todo.priority = action.payload.priority;
        }
      }
      
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
