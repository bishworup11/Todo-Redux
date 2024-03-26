import React from "react";
import { useDispatch } from "react-redux";
import { isCompleted, deleteTodo } from "../redux/TodoSlice";
const TodoCard = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(isCompleted({ id, completed: !completed }));

	
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };



  return (
    <li style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div id="id1"  style={{
            margin: "10px",
            textDecoration: completed ? "line-through" : "none" 
          }} >
          <input
            type="checkbox"
            checked={completed}
			
            onClick={handleCheckboxClick}
          ></input>
          {title}
        </div>

        <div style={{ margin: "10px" }}>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>

      </div>
    </li>
  );
};

export default TodoCard;
