import React,{useState} from 'react'


//UseState hook is usefull for managing state in functional components.
//In this example, we will use a variable to store the state and update it on button click.when we click the button, the value of x will be incremented and logged to the console.but the UI will not update because we are not using useState hook.
//Usestate rerender the component when the state changes, so the UI will reflect the updated value of x.
//Usestate always return a array contains one variable and a function to update that variable.

function App() {
   
  const [num,setNum]=useState(1);
    
    const handleClick = () => {

    setNum((val)=>{
      return val+1
    });
    
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default App
