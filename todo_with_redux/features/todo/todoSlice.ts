
import { Todo } from "@/type/type";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: { todos: Todo[] } = {
    todos: []
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo: Todo = {
                id: nanoid(),
                text: action.payload
            }
            console.log(todo)
            console.log(action.payload)
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },


    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer