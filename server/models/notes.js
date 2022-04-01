import mongoose from 'mongoose';

const Schema  = mongoose.Schema;
const noteSchema = new Schema({
  title:{
  type: String,
  required: true
},
  content:String
},
  {timestamps:true});

const Note =mongoose.model('Note', noteSchema)

export default Note;
