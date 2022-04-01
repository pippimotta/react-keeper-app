import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Note(props) {




  return (
    <div className="note">
      <h1 className='title'>{props.title}</h1>
      <p>{props.content}</p>
      <div className='note-icon'>
      <button className='icon' onClick={()=>props.onEdit(props.id)}><EditIcon /></button>
      <button className='icon' onClick={()=>props.onDelete(props.id)}><DeleteIcon /></button>
      </div>
    </div>
  );
}
export default Note;
