import React from "react";

function ToDoItems(props) {
  // const [isDone, setisDone] = React.useState(false);

  // function handleClick() {
  //   setisDone((prevValue) => {
  //     return !prevValue;
  //   });

  return (
    // <div onClick={props.onChecked}>
    //   <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
    //     {props.text}
    //   </li>
    // </div>

    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItems;
