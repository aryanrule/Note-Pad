import React, { useEffect, useState } from 'react'
import Button from './Button'
import { RiDeleteBinLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { DeleteNotes } from '../Redux/slices/FeaturesSlice';
import { Link } from 'react-router-dom';
const Notes = () => {

  //managing the states using useselector hooks 
  //Whatever is there in the  Notes show it on the UI 
  const Notes = useSelector((state)=> state.Feature.Notes);
 

  useEffect(()=> {
    console.log(Notes);   // this is an array 
  });
  const dispatch = useDispatch();
   
 
  return (
    //using map function just simply go and make cards 

    <div>
         <Button/> 
          
          {
            Notes.length === 0 ? (<div>Nothing is here</div>) : 
            (
             Notes.map((Note)=>(
              <div key = {Note.NoteId}>
                  <p>{Note.title} </p>
                  <button onClick={() => dispatch(DeleteNotes(Note.NoteId , Note))}>delete</button>
                  <br/> 
                  

                  <button>
                            <a href={`/?NoteId=${Note.NoteId}`}>update</a>
                  </button>

                  {/* important functionality hai to just view your snippet  */}
                   
                  
              </div>
             ))
            )
          }
    </div>

  )
}

export default Notes