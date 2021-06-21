import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [list, setList] =useState(new Values('#f25015').all(10));
  const [error, setError] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }catch(error){
      setError(true);
    }
    
  }

  return <>
   <section className='container'>
     <h3>Color generator</h3>
     <form onSubmit={handleSubmit}>
       <input type='text' value={color}
        onChange={(e) => setColor(e.target.value)}
         placeholder='#f25015'
         className={`${error ? 'error' : null}`}></input>
       <button type='submit' className='btn'>Generate</button>
      </form>   
   </section>
   <section className='colors'>
     {list.map((color,index) => {
       return(
         <SingleColor key={index} {...color} index={index} />
       )
     })}
  </section>
  </>
}

export default App
