import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import { toast } from "react-toastify";

const initialState = {
     // trying to get the items from the localStorage
     // key value pairs 
     Notes : localStorage.getItem("Notes") ? JSON.parse(localStorage.getItem("Notes")) : []    //else make it a empty array 
}

export const FeaturesSlice = createSlice({
    name:'Feature' , 
    initialState ,
    reducers:{
        addNotes:(state , action)=> {
           const Notes = action.payload;
           state.Notes.push(Notes);

           //setting the Notes with corresponding key value 
           localStorage.setItem("Notes" , JSON.stringify(state.Notes));
           toast("Note addedd successfully");
        } , 
          
        UpDateNotes:(state, action)=> {
              
              const Note = action.payload;
              const index = state.Notes.findIndex((item)=> item.NoteId === Note.NoteId);
              console.log(Note);
              console.log(index);
              const Notes = state.Notes;
              console.log(Notes);

              if(index>=0){
                state.Notes[index] = Note;
                

                //local storage update 
                localStorage.setItem("Notes" , JSON.stringify(state.Notes));
                toast("Note is Updated");
              }      

        } , 
        DeleteNotes:(state , action) => {
            // i want to delete the note of a particular id 
            const NoteId = action.payload;   
            
            //filtering out   //first thing is to remove it from the localstorage 
            const UpdatedNotes = state.Notes.filter((Note) => Note.NoteId !== NoteId);
            
            //updating the localStorage again
            state.Notes = UpdatedNotes;
            localStorage.setItem("Notes" , JSON.stringify(UpdatedNotes));
            toast("Note deleted succesfully");
            
        } 
    }
});

export const {addNotes , UpDateNotes , DeleteNotes} = FeaturesSlice.actions;
export default FeaturesSlice.reducer ;
