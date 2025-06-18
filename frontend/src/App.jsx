//barebones gotten from "rafce" + tab
import React from 'react'
import HomePage from './Pages/HomePage'
import { Routes, Route } from 'react-router'
import NoteDetailPage from './Pages/NoteDetailPage'
import CreatePage from "./Pages/CreatePage"
import {toast} from 'react-hot-toast';
import "./input.css"


const App = () => {
  return (
    <div>
      <p> THIS IS THE MAIN PAGEasdfasdf </p>
      {/* this part creates the links to other pages */}
      {/* {()=>toast.success("JFDLFKSJLDFJDLK")} */}
      <button onClick={() => toast.success("congrats")} className="text-red-500 p-4 bg-pink-300">CLICK HERERRRR</button>
      <button onClick={() => toast.error("congrats")}>CLICK HERERRRR</button>
      <p className="text-green-500 text-2xl font-bold">TAILWIND TEST</p>
      <Routes>
        <Route path = "/" element={<HomePage />}> </Route>
        <Route path = '/create' element = {<CreatePage />}></Route>
        <Route path = "/note/:id" element = {<NoteDetailPage />}></Route>
      </Routes>
      
    </div>
  )
}

export default App