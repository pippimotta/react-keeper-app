import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className='title'>{props.title}</h1>
      <p>{props.content}</p>
      <button style={{backgroundColor:"#fff"}}onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
