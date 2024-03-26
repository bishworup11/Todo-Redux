import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state, action)=>{
            const newTodo={
                id:action.payload.id,
                title:action.payload.title,
                completed:false
            };
            state.push(newTodo);
        },
        isCompleted:(state,action)=>{
            const index=state.findIndex(
                (todo)=>todo.id===action.payload.id

            );

            state[index].completed=action.payload.completed;
        },
        deleteTodo: (state,action)=>{
            return state.filter((todo)=>todo.id!==action.payload.id);
         },
         
    }

});

export const{
    addTodo,
    isCompleted,
    deleteTodo,
}=TodoSlice.actions;
export default TodoSlice.reducer;
