import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import api from "../lib/axios"
import {toast} from "react-hot-toast"

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    //on submissions, it'll refresh page
    e.preventDefault();

    //otherwise internal server error
    if (!title || !content){
      toast.error("fill in all the fields!");
      return
    }

    setLoading(true)
    try {
      console.log("TRYING");
      await api.post("/notes",{
        title, content
      });
      toast.success("Note created successfully");
      navigate("/")
    } catch (error) {
      toast.error("failed to create")
      if(error.responst.status === 429){
        toast.error("You're creating notes too fast");
      }
     
  }
}

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {/* take notes peopl! */}

                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  {/*  will be disabled if we are loading. if loading, the it'll show */}
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating..." : "Create Note"}
                  </button> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CreatePage