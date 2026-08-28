import React from 'react'

const NoteCard = ({note,deleteNote,noteForUpdate}) => {
  return (
    <div className='w-[22%] border border-black p-4 flex flex-col gap-4 rounded-xl '>
        <h1>{note.title}</h1>
        <p>{note.description.length > 20 ? note.description.substring(0,20) : note.description}</p>
        <div className='flex justify-between'>
            <button onClick={()=>{noteForUpdate(note)}} className='p-2 bg-amber-300 text-black'>Update</button>
            <button onClick={()=>{deleteNote(note._id)}} className='p-2 bg-red-700 text-black'>Delete</button>
        </div>
    </div>
  )
}

export default NoteCard