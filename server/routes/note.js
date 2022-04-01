import express from 'express';
// import {readNotes,createNotes} from '../controller/note.js';
import Note from '../models/notes.js';

const router =express.Router()

//read all notes
router.get('/notes',(req,res)=>{
  Note.find({}, (err,foundNotes) =>{
    res.json(foundNotes);
  });
});


//create a new note
router.post('/notes', (req,res)=>{
  const newNote = new Note(req.body)
  newNote.save()
         .then((note)  =>  res.send(note))
         .catch((err) => res.status(422).send("Note add failed"))
});

//read a particular note

router.get('/notes/:id', (req, res) =>{
  Note.findById(req.params.id, (err, note) => {
    if (!note) {
      res.status(404).send('No result found');
    } else {
      res.json(note);
    }
  });
});

//update a particular note
router.patch('/notes/:id', (req, res)=>{
  Note.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json('Note updated');
    })
    .catch((err) =>{
      res.status(422).send("Note update failed.");
    });
});

//delete a particular note
router.delete('/notess/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) =>{
    if (!note) {
      res.status(404).send('Note not found');
    } else {
      Note.findByIdAndRemove(req.params.id)
        .then(() =>{ res.status(200).json("Note deleted") })
        .catch((err) => {
          res.status(400).send("Note delete failed.");
        })
    }
  });
})


export default router;
