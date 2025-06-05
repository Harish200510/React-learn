import React from 'react'
import { useState, useEffect } from 'react';



//useEffect is usefull when you update in one place and you want that changes to be reflected in all other place
//useeffect is also used to initially load data from an API 
//whenever you are calling useeffect you sholud pass one callback function and a array



function App() {

  const [num,setNum]=useState(100);

  useEffect(()=>{
     setNum(200)
  },[])
   console.log(num)
  return (
    <div>
      <h1>{num}</h1>
    </div>
  )
}

export default App
