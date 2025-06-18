//barebones gotten from "rafce" + tab
import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router'
import NoteDetailPage from './Pages/NoteDetailPage'
import CreatePage from "./Pages/CreatePage"

const App = () => {
  return (
    <div>
      <p> THIS IS THE MAIN PAGE </p>
      {/* this part creates the links to other pages */}
      
      <Routes>
        <Route path = "/" element={<HomePage />}> </Route>
        <Route path = '/create' element = {<CreatePage />}></Route>
        <Route path = "/note/:id" element = {<NoteDetailPage />}></Route>
      </Routes>
    </div>
  )
}

export default App