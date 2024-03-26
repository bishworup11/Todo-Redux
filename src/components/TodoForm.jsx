import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/TodoSlice";
import TodoCard from "./TodoCard";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const allTodo = useSelector((state) => state.todos);

  const onSubmit = (event) => {
    event.preventDefault();
    if (value != "")
      dispatch(
        addTodo({
          id: Date.now(),
          title: value,
        })
      );
    setValue("");
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <form onSubmit={onSubmit} style={{ position: "fixed" }}>
          <input
            type="text"
            placeholder="write task name"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>

      <div>
        <ol>
          {allTodo.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ol>
      </div>

    </div>
  );
}
