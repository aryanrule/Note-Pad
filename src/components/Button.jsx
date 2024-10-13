import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  const [toggle, setToggle] = useState(true);
  

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  const baseButtonStyles = 'w-[160px] h-[40px] rounded-full font-bold';
  
  return (
    <div className='p-5 gap-10 flex flex-row justify-center items-center'>
      <Link to='/'>
        <button
          onClick={() => setToggle(true)}
          className={`${baseButtonStyles} ${toggle  ? 'bg-blue-500 text-white' : 'bg-slate-200 text-black'}`}
          // aria-pressed={toggle}
        >
          Home
        </button>
      </Link>

      <Link to='/Notes'>
        <button
          onClick={() => setToggle(false)}
          className={`${baseButtonStyles} ${!toggle ? 'bg-blue-500 text-white' : 'bg-slate-200 text-black'}`}
          // aria-pressed={!toggle}
        >
          Notes
        </button>
      </Link>
    </div>
  );
};

export default Button;
