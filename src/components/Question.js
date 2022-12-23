import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info ,  title}) => {
  const [open , setOpen ] = useState(false)
  return (
  <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>setOpen(!open)}>{open ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      <p>{open &&  info}</p>
  </article>);
};

export default Question;
