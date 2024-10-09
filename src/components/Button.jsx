import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Button = () => {
  
  const [toggle , setToggle ] = useState(true);
  
  return (
    <div>
       <div className='p-5 gap-10 flex flex-row justify-center items-center '>
          
        <Link to='/'>
            <button 
            onClick={()=>setToggle(true)}
            className={toggle ?  'w-[150px] h-[50px] bg-blue-500 rounded-full text-white font-bold' 
                              : 'w-[150px] h-[50px] text-black  bg-slate-200 rounded-full font-bold'}
            >
                   Home 
           </button>
        </Link>

        
        <Link to='/ViewNotes'>
           <button 
            onClick={()=>setToggle(false)}
            className={toggle ?    'w-[150px] h-[50px] text-black  bg-slate-200 rounded-full font-bold'
                              : 'w-[150px] h-[50px] bg-blue-500 rounded-full text-white font-bold'}
            >
                   Notes 
           </button>
        </Link>
          
       </div>
    </div>
  )
}

export default Button