import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../app/types";

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    markTaskAsCompleted: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
  },
});

export const { addTask, deleteTask, markTaskAsCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
