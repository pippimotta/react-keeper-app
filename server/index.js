import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import notesRoutes from './routes/note.js';
const app =express();
const port = process.env.PORT || 5000;
dotenv.config();

app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api', notesRoutes);

const uri=process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

app.get('/',(req,res) =>{
  res.send('welcome to this page!')
})
connection.once("open", () => {
    console.log("MongoDB database connection established");
});

app.listen(port, function() {
    console.log("Server started on port 5000");
  });
