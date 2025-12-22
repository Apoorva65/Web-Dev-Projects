import {createSlice,nanoid} from '@reduxjs/toolkit'

export const initialState = {
    todos : []
}

export const TodoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers: {
        addTodo : (state,action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((val)=>val.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo} = TodoSlice.actions

export default TodoSlice.reducer