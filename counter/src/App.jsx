// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// // import './counter'

// import { useEffect } from "react";

// function App() {

//   let [counter , setcounter] = useState(0)
//   let [value , setvalue] = useState(0)


//   const increasecounter  = () => {
//     if (counter <= 20){
//       counter = counter + value
//       setcounter(counter)
//       console.log(counter)
      
//     }else{
     
//       console.log("this value cannot be further added acc to program .")
//     }
    
//   }
//   const decreasecounter = () => {
//     if (counter<value){
//       console.log("The counter cannot be reduced. ")
//     }else{
//       counter = counter - value
//       setcounter(counter)
//       console.log(counter)

//     }

//   }

//   const addvalue = () => {
//     value++
//     setvalue(value)
//     console.log(value) 
//   }

//   const decreasevalue = () => {
//     --value
//     setvalue(value)
//     console.log(value)
//   }

//   return (  
//     <>
//     <div className="counters">

//       <div className="container">
//         <h1 id="title">
//           Counting program
//         </h1>
//         <p>
//           This program helps us to count the numbers .
//         </p>
//       </div>

//       <div className="card">
//         <p>
//           Default value : {counter}
//         </p>

//         <button onClick={increasecounter}>
//           Increase counter 
//         </button>
//         <button onClick={decreasecounter}>
//           Decrease counter
//         </button>
//         <br />
//         <button onClick={addvalue}>
//           +
//         </button>
//         <p>Value : {value}</p>
//         <button onClick={decreasevalue}>
//           -
//         </button>
//       </div>

//     </div>
      
//     </>
//   )
// }

// export default App

// import { useState } from "react";
// import Todos from "./Todos";

// export default function App() {
//   const [count , setCount] = useState(0);
//   const [todos , setTodos] = useState(["todos 1" , "todos 2","todos 3"]);

//   const increment = () =>{
//     setCount((c)=>c+1);
//   };

//   return (
//     <>
//     <h1>This is a page that increments the number</h1>
//     <Todos todos={todos} />
//     <hr />
//     <div>
//       Count : {count} 
//       <button onClick={increment}>+</button>
//     </div>

//     </>
//   );
// }

// 

// import {useState,useEffect,useRef} from 'react';

// function App(){
//   const [inputValue,setinuputValue] = useState("");
//   const previousInputValue = useRef("");

//   useEffect(()=>{
//     previousInputValue.current = inputValue;
//   },[inputValue]);

//   return (
//     <>
//     <input 
//     type='text'
//     value={inputValue} 
//     onChange={(e)=>setinuputValue(e.target.value)}
//     />
//     <p>Current Value : {inputValue}</p>
//     <p>Previous Value : {previousInputValue.current}</p>
//     </>
//   )
// }

// export default App;

import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: true,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
export default App;
