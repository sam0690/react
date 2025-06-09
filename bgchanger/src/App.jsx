import { useState } from 'react'
import './App.css'
// import './sum'



function App() {
  const [color , setColor] = useState("white")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <h1 className="flex justify-center text-black font-mono font-bold text-2xl py-5">Background Changer</h1>
      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-5">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>green</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}}>purple</button>
          <button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "lavendar"}}>lavender</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "yellow"}}>yellow</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black"}}>black</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "cyan"}}>cyan</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "pink"}}>pink</button>
          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor: "white"}}>white</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
