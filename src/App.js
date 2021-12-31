import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import NotesList from './components/NotesList'
import Search from './components/Search';
const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => {
      return note.id !== id
    })
    setNotes(newNote)
  }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('Notes'))
    if(savedNotes){
      setNotes(savedNotes)
    }
  }, [])
  useEffect(() => {
   localStorage.setItem('Notes', JSON.stringify(notes))
  }, [notes])
  
  return (
    <div className={darkMode ? 'dark-mode dark' : '' }>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText} />
      <NotesList notes={notes.filter((note) => {
        return note.text.toLowerCase().includes(searchText)
      })}
        handleDeleteNote={deleteNote} handleAddNote={addNote} />
    </div>
    </div>
    
  )
}
export default App