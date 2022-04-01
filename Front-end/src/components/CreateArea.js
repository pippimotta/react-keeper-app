import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import  axios from 'axios';
function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    const data= {
      title:note.title,
      content:note.content
    }
    axios.post('http://localhost:5000/api/notes',data)
    .then(res => console.log(res.data))
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <form className="create-note">

         <input
           name="title"
           onChange={handleChange}
           value={note.title}
           placeholder="Title"
         />


        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows= "3"
        />


      <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>

      </form>
    </div>
  );
}

export default CreateArea;
