import { useState } from "react";
function App(){

  let nums=1;

  let [num,setNum]=useState(1);
  
  function inc(){
    setNum((cur_val)=>{return cur_val+=1})// is literally same setNum(++num) this callback function is called whenever we call the setNum fucntion in cur_val we will get the current value of the variable which is inide of that function 
   
  }   

  let val=1;
  function add(){
    val++;
    console.log(val);
  }
  return(
   <>
   <h1>{val}</h1>
   <button onClick={add}>ADD</button>
   </>
   
  )
}

export default App;