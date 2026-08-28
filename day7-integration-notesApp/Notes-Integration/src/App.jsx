import React, { useState } from "react";
import axios from "axios"
import { useEffect } from "react";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title:"",
    description:""
  });

  const [updateNoteId, setUpdateNoteId] = useState(null)

  const [allNotes, setAllNotes] = useState([])



  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const getAllNotes = async()=>{
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes")
      setAllNotes(res.data.data)
      console.log(res);
    } catch (error) {
      console.log("error in getting all notes", error);
    }
  }

useEffect(()=>{
  getAllNotes()
},[])


  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if(updateNoteId){
      let res = await axios.put(`http://localhost:3000/notes/${updateNoteId}`,formValues)
      console.log(res)
      setUpdateNoteId(null)
      
    }
    else{
      let res = await axios.post("http://localhost:3000/notes/create", formValues)
    console.log(res);
    }

    setFormValues({
      title: "",
      description: "",
    });
    getAllNotes()
  };


  let deleteNote = async(id)=>{
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`)
      console.log(res);
      getAllNotes()
    } catch (error) {
      console.log("error while deleting note",error);
      
    }
  }

  let noteForUpdate = (note)=>{
    console.log(note);
    setUpdateNoteId(note._id)
    setFormValues({
      title:note.title,
      description:note.description})
  }


  return (
    <div className="h-screen flex flex-col gap-5 p-5">
      <h1 className="text-3xl font-semibold ">Notes App</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-70 border border-bs-gray-900 p-4"
      >
        <input
          onChange={handleChange}
          name="title"
          value={formValues.title}
          className="border outline-none text-xl p-2 border-black"
          type="text"
          placeholder="Title"
        />
        <input
          onChange={handleChange}
          name="description"
          value={formValues.description}
          className="border outline-none text-xl p-2 border-black"
          type="text"
          placeholder="Description"
        />
        <button className="bg-blue-600 rounded p-2 text-white ">
          {updateNoteId ? "Update" : 'Add Note'}
        </button>
      </form>

      <div className="flex flex-wrap gap-4 ">
        {
          allNotes.map((val)=>{
            return <NoteCard key={val._id} note={val} deleteNote= {deleteNote} noteForUpdate={noteForUpdate} />
          })
        }
      </div>
    </div>
  );
};

export default App;
