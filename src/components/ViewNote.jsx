//no updation is allowed only ypu can view it or delete it 
import React from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom'

const ViewNote = () => {

  const [searchParams] = useSearchParams();
  const NoteId = searchParams.get("NoteId");
  console.log(NoteId);
  const Notes = useSelector((state)=> state.Feature.Notes);
  console.log(Notes);
  const Note = Notes.find((Note) => Note.NoteId === NoteId);
  console.log(Note);
  
  
  return (
    //style it 
    <div>
     {
       NoteId ? <div>{Note.title}</div> : <div>thia is not a valid</div>
     }
    </div>
  )
}

export default ViewNote