import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import './counter'

function App() {

  let [counter , setcounter] = useState(0)
  let [value , setvalue] = useState(0)


  const increasecounter  = () => {
    if (counter <= 20){
      counter = counter + value
      setcounter(counter)
      console.log(counter)
      
    }else{
     
      console.log("this value cannot be further added acc to program .")
    }
    
  }
  const decreasecounter = () => {
    if (counter<value){
      console.log("The counter cannot be reduced. ")
    }else{
      counter = counter - value
      setcounter(counter)
      console.log(counter)

    }

  }

  const addvalue = () => {
    value++
    setvalue(value)
    console.log(value) 
  }

  const decreasevalue = () => {
    --value
    setvalue(value)
    console.log(value)
  }

  return (  
    <>
    <div className="counters">

      <div className="container">
        <h1 id="title">
          Counting program
        </h1>
        <p>
          This program helps us to count the numbers .
        </p>
      </div>

      <div className="card">
        <p>
          Default value : {counter}
        </p>

        <button onClick={increasecounter}>
          Increase counter 
        </button>
        <button onClick={decreasecounter}>
          Decrease counter
        </button>
        <br />
        <button onClick={addvalue}>
          +
        </button>
        <p>Value : {value}</p>
        <button onClick={decreasevalue}>
          -
        </button>
      </div>

    </div>
      
    </>
  )
}

export default App
