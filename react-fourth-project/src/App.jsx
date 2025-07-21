import Button from "./button/button"
import './App.css'
import { useState } from "react"


function App() {
  const[count,setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }
  
  return (
    <div>
      {/* <Card name =" abhishek">
        <h1>hello welcome to web dev</h1>
        <p>what new about you and introduce yourself</p>
        
        
      </Card> */}

      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
      </Button>

      
         

      

      
         
     
    </div>
  )
}

export default App
