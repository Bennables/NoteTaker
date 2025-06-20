import React, { useEffect } from 'react'
import { useState } from 'react';
import NavBar from '../Components/NavBar'
import axios from "axios";
import {toast} from "react-hot-toast"
import RateLimitedUI from '../Components/RateLimited';
import NoteCard from '../Components/NoteCard';
import api from "../lib/axios"

const HomePage = () => {

  /*
    states - descriptive state name, and second is usually setname
    setname is a setter for name
    have an event listener for set. ()=>setname(name + 1) << incrementer sample

  */
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);


  /*
    useffect - hook from react
    it make side effects when a STATE CHANGES
    [] dependency array
    () 
    {} code to run
      optional return function
        timing of return is odd
        useEffect destroys itself each change, runnign return 
                      before recreating and running body first Odd;
    
    will run at least once, might not work after
      needs dependencies

  */


  useEffect(() => {
    const fetchNotes = async () =>{
      try {
        // const res = await fetch("localhost:5001/api/notes");
        // const data = await res.json();

        const res = await api.get("")
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) { 
        console.log("ERROR FETCHING DATA HomePage.jsx");
        if (error.response?.status === 429){
          setIsRateLimited(true);
        }else{
          toast.error("failed to load data");
        }
      }
    };
  fetchNotes();
    
  }, []);


  return (
    <div className='min--h-screen'>
       
      <NavBar></NavBar>
      {isRateLimited && <RateLimitedUI></RateLimitedUI>}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className = "text-center text-primary py-10">Loading Notes</div>}
        {notes.length > 0 && !isRateLimited && (
          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard key={note._id} note={note}/>
              // <div>
              //   {note.title} | {note.content}
              // </div>
            ))}
          </div>
        )}
      </div>
    </div>

  )
}

export default HomePage