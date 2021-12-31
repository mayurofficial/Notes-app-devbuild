import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({notes, submitHandler, handleAddNote, handleDeleteNote}) => {
    return (
        <div>
            <div className="notes-list">
                {
                    notes.map((note, index)=>{
                       return <Note key={index} id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote} />
                    })
                }
                <AddNote handleAddNote={handleAddNote}/>
            </div>
        </div>
    )
}

export default NotesList
