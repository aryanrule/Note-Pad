import React from "react";
import book from "../Images/book.png";
import Button from "./Button";

const Home = () => {

  

  
  return (
    <div className="flex flex-col items-center">
      
      <Button />

      
      <form className="flex flex-col items-center mt-6">
        <div className="flex flex-row items-center gap-4">
          <img className="h-[30px] w-[30px]" src={book} alt="Book Icon" />

          <input
            className="w-[400px] h-[40px] p-2 border rounded"
            placeholder="Enter Title for Your Note ...."
            
          />

          <button className="w-[80px] h-[35px] bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Note!
          </button>
        </div>

       
        <div className="flex items-center justify-center mt-6">
          <textarea
            className="m-10 p-2 border-black border rounded relative"
            id="message"
            name="message"
            rows="15"
            cols="100"
            placeholder="Type your message here..."
          />
        </div>
      </form>
    </div>
  );
};

export default Home;
