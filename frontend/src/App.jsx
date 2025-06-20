//barebones gotten from "rafce" + tab
import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router'
import NoteDetailPage from './Pages/NoteDetailPage'
import CreatePage from "./Pages/CreatePage"
import {toast} from 'react-hot-toast';
import "./input.css"
import NavBar from './Components/NavBar'
import RateLimitedUI from './Components/RateLimited'
import NoteCard from './Components/NoteCard'


const App = () => {
  return (
    <div data-theme = "forest" className='relative h-full w-full'>
      {/* this part creates the links to other pages */}
      <button onClick={() => toast.success("congrats")} className="btn">CLICK HERERRRR</button>
      <button onClick={() => toast.error("congrats")}>CLICK HERERRRR</button>
      {/* <RateLimitedUI></RateLimitedUI> */}
      <Routes>
        <Route path = "/" element={<HomePage />}> </Route>
        <Route path = '/create' element = {<CreatePage />}></Route>
        <Route path = "/note/:id" element = {<NoteDetailPage />}></Route>
      </Routes>
      
    </div>
  )
}

export default App