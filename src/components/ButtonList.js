import React, { useRef } from 'react'

import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const ButtonList = () => {

  const buttonRef=useRef()
  const leftShift=()=>{
    console.log(buttonRef.current);
    buttonRef.current.scrollBy({
      left:-100,
      behavior:"smooth",
    });

  }

  const Button=["All","Live","JavaScript","Music","AI","Podcasts","IT","Diwali","News","Data type","recruitment","Chants","Computer Architecture","Jai Hanuman","Mixes","Lo-Fi","Indian pop music","Recently uploaded","watched","new to you"];
  return (
    <div className='flex'>
      <FaLessThan onClick={leftShift} className="text-white my-10"  />
      <div className='flex overflow-x-auto'style={{ maxWidth: '80vw' }} ref={buttonRef}> 
      {
        Button.map((button,i)=><button key={i}
         className='text-white shadow-lg  px-2 mx-2 my-8 w-auto whitespace-nowrap rounded-lg border border-slate-700 '>{button}</button>)
      }
      
    </div>
      <FaGreaterThan className="text-white my-10" ></FaGreaterThan>
      
    </div>
  )
}

export default ButtonList