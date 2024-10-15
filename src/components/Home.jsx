// import React, { useEffect, useState } from "react";
// import book from "../Images/book.png";
// import Button from "./Button";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { nanoid } from "@reduxjs/toolkit";
// import { useDispatch, useSelector } from "react-redux";
// import { addNotes, UpDateNotes } from "../Redux/slices/FeaturesSlice";

// const Home = () => {
  
//   const [searchParams] = useSearchParams();
//   const dispatch = useDispatch();
//   //http://localhost:5173/?NoteId=12374t1623t4612346   for an example if getting a noteId which means i am gona update this 
//   const NoteId = searchParams.get('NoteId');
//   const ExisitingNotes = useSelector((state) => state.Feature.Notes);
//   const navigate = useNavigate();


//   const [data, setData] = useState({
//     title: "",
//     message: "",
//   });

//   const changeHandler = (event) => {
//     const { name, value } = event.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value, // Update the specific field (title or message)
//     }));
//   };

//   const submitHandler = (event) => {
//     event.preventDefault(); // Corrected spelling of preventDefault
    

//     if(NoteId){   //means you need to update it //high possibility that i am comming to update it 
       
//       //lets update it 
//       const Note = {
//         title : data.title , 
//         message:data.message , 
//         NoteId:NoteId , 
//         createAt: new Date(Date.now()).toLocaleString(), 
//       }

//       dispatch(UpDateNotes(Note));
           
//       //after updating i want to ridirect at my home page 
//       navigate('/');

//     }

//     else {   //means this is a new Note you hava to make 
      
//       const Notes  = { 
//         title : data.title , 
//         message : data.message , 
//         NoteId: nanoid() , 
//         createAt: new Date(Date.now()).toLocaleString(), 

//       }
      
//       dispatch(addNotes(Notes));
      
//     }

//     setData({
//       title:"" , 
//       message:"" , 
//     });

//     // console.log(ExisitingNotes);
    
//   };
  
//   useEffect(()=> {
//      if(NoteId){  //if it is a valid id (controll components behaviour) 
//       const Note = ExisitingNotes.find((note)=> note.NoteId === NoteId);
//       setData({
//         title:Note.title , 
//         message : Note.message , 
//       })
//      }
     
//   },[NoteId]);


//   return (
//     <div className="flex flex-col items-center ">
//       <Button />

//       <form onSubmit={submitHandler} className="flex flex-col items-center mt-6 min-w-[300px]">
//         <div className="flex flex-row items-center gap-4 min-w-[300px]">
//           <img className="h-[30px] w-[30px]" src={book} alt="Book Icon" />

//           <input
//             onChange={changeHandler}
//             className="w-[400px] h-[40px] p-2  border-2 rounded-2xl border-gray-300  font-medium"
//             placeholder="Enter Title for Your Note ...."
//             id="title"
//             type="text"
//             required={true}
//             name="title"
//             value={data.title}
//           />

//           <button
//             type="submit"
//             className="w-[80px] h-[35px] bg-blue-500 text-white rounded-md hover:bg-blue-600"
//           >
//             { NoteId ? "UpDate !" : "Note!"  } 
//           </button>
//         </div>

//         <div className="flex items-center justify-center mt-6">
//           <textarea
//             onChange={changeHandler}
//             className="m-10 p-2 border-black border rounded relative max-w-lg min-w-[300px]"

//             id="message"
//             name="message"
//             value={data.message}
//             rows="15"
//             cols="100"
//             placeholder="Type your message here..."
//             required={true}
//           />
          
          

//           </div>
//       </form>
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import book from "../Images/book.png";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, UpDateNotes } from "../Redux/slices/FeaturesSlice";

const Home = () => {
  
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  //http://localhost:5173/?NoteId=12374t1623t4612346   for an example if getting a noteId which means i am gona update this 
  const NoteId = searchParams.get('NoteId');
  const ExisitingNotes = useSelector((state) => state.Feature.Notes);
  const navigate = useNavigate();


  const [data, setData] = useState({
    title: "",
    message: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value, // Update the specific field (title or message)
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Corrected spelling of preventDefault
    

    if(NoteId){   //means you need to update it //high possibility that i am comming to update it 
       
      //lets update it 
      const Note = {
        title : data.title , 
        message:data.message , 
        NoteId:NoteId , 
        createAt: new Date(Date.now()).toLocaleString(), 
      }

      dispatch(UpDateNotes(Note));
           
      //after updating i want to ridirect at my home page 
      navigate('/');

    }

    else {   //means this is a new Note you hava to make 
      
      const Notes  = { 
        title : data.title , 
        message : data.message , 
        NoteId: nanoid() , 
        createAt: new Date(Date.now()).toLocaleString(), 

      }
      
      dispatch(addNotes(Notes));
      
    }

    
    setData({
      title:"" , 
      message:"" , 
    });

    // console.log(ExisitingNotes);
    
  };
  
  useEffect(()=> {
     if(NoteId){  //if it is a valid id (controll components behaviour) 
      const Note = ExisitingNotes.find((note)=> note.NoteId === NoteId);
      setData({
        title:Note.title , 
        message : Note.message , 
      })
     }
     
  },[NoteId]);


  return (
    <div className="flex flex-col items-center ">
      <Button />

      <form onSubmit={submitHandler} className="flex flex-col items-center mt-6 min-w-[300px]">
        <div className="flex flex-row items-center gap-4 min-w-[300px]">
          <img className="h-[30px] w-[30px]" src={book} alt="Book Icon" />

          <input
            onChange={changeHandler}
            className="w-[400px] h-[40px] p-2  border-2 rounded-2xl border-gray-300  font-medium"
            placeholder="Enter Title for Your Note ...."
            id="title"
            type="text"
            required={true}
            name="title"
            value={data.title}
          />

          <button
            type="submit"
            className="w-[80px] h-[35px] bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            { NoteId ? "UpDate !" : "Note!"  } 
          </button>
        </div>

        <div className="flex items-center justify-center mt-6">
          <textarea
            onChange={changeHandler}
            className="m-10 p-4  relative max-w-3xl min-w-[300px] rounded-2xl "

            id="message"
            name="message"
            value={data.message}
            rows="15"
            cols="100"
            placeholder="Type your message here..."
            required={true}
          />
          
          

          </div>
      </form>
    </div>
  );
};

export default Home;
