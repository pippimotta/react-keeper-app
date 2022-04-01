import React from "react";
import Header from './Header';
import Footer from './Footer';
import Note from "./Note";
import axios from 'axios';
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const API_URL= 'https://keeper-app-db.herokuapp.com/api/notes'
function App() {
  const[note, setNote] =React.useState({title:'',content:''})
  const [notes, setNotes] = React.useState([]);
  const [currentId, setCurrentId]  = React.useState(0);
  const [isExpanded, setExpanded] = React.useState(false);

  React.useEffect(() =>{
    fetch(API_URL)
    .then(res=> res.json())
    .then(notes =>setNotes(notes))
  },[notes])

  React.useEffect(()=> {
    let currentNote  = currentId !== 0 ?  notes.find(note  => note._id ===  currentId)
    : {title:'',content:''}
    setNote(currentNote)
  },[currentId])

  const clear = () =>{
    setCurrentId(0);
    setNote({title:"",content:""})
  }
  React.useEffect(() => {
     const clearField = (e) => {
       if(e.keyCode === 27){
         clear()
       }
     }
     window.addEventListener('keydown', clearField)
   return () => window.removeEventListener('keydown', clearField)
 },[])

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
    const data= {
      title:note.title,
      content:note.content
    }
    if (currentId === 0) {
      axios.post(API_URL,data)
            .then(setNotes(prevNotes => {
              return [...prevNotes, data];
            }))
      clear();

    } else {
      axios.patch(API_URL +`/${currentId}`,data)
            .then(res => console.log ('Data updated!'))
            .catch(err => console.log('Error: '+ err))
      clear();
    }


    event.preventDefault();
  }

  function deleteNote(id) {
    axios.delete(
      API_URL +`/${id}`
    ).then(res => console.log(res.data))
    setNotes(prevNotes => {
      return prevNotes.filter(noteItem => {
        return noteItem.id !== id;
      });
    });
  }

  function editNote(id) {
    setCurrentId(id)
  }

  function expand(){
    setExpanded(true)
  }

  return (
    <div>
      <Header />
        <div className='main'>
          <form className="create-note">
            {isExpanded &&
              (<input
                name="title"
                onChange={handleChange}
                value={note.title}
                placeholder="Title"
              />)
            }


            <textarea
              name="content"
              onClick={expand}
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows= {isExpanded? 3: 1}
            />

            <Zoom in={isExpanded}>
                  <Fab onClick={submitNote}>
                    <AddIcon />
                  </Fab>
            </Zoom>

          </form>

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
      </div>
    <Footer />
    </div>
  );
}


export default App;
