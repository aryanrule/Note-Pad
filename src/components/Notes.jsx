import React from 'react'
import Button from './Button'
import { RiDeleteBinLine } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

import { GrUpdate } from "react-icons/gr";


const Notes = () => {


  

  return (
    <div className='flex flex-col justify-center items-center '>
       <Button/>

           
        <div className='w-[80%] h-[150px] bg-slate-200 m-10 rounded-xl '>

          <div className='flex flex-row items-center justify-between'>

          <h1 className=' font-bold text-[20px] p-2'>title</h1>

          <div className='flex gap-3 p-3'>
          <FaEye className='h-[20px] w-[20px]' />
          <GrUpdate className='h-[20px] w-[20px]' />
          <RiDeleteBinLine  className='h-[20px] w-[20px]' />
          <FiShare2 className='h-[20px] w-[20px] ' />
          </div>
          
          </div>
          <div className='h-[1px] w-full bg-black'></div>

          <p>oirfhiusduifub</p>
        </div>

    </div>
  )
}

export default Notes