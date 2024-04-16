import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    // Default syntax of createSlice({name,initialState,reducers})
    name:'todo',
    initialState:{
        todos:[ {id:nanoid(), text:"First list"} ]
    },
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>
            todo.id!==action.payload)
        }
        // ,updateTodo:(state,action)=>{
        //     state.todos=state.todos.map((todo)=>
        //     todo.id===state.todos.id?action.payload:todo)
        // }
    }
})

// Exporting Individual Functionalities
export const {addTodo, removeTodo}= todoSlice.actions;

export const todoReducer = todoSlice.reducer;