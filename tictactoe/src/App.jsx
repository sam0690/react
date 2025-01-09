import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './script'

function App() {

  return (
    <>
    <div className="container">
      <h1>TIC-TAC-TOE</h1>
      <p id='turn'>Player 1's Turn (X)</p>
      <div className="board">
        <button className="cell" data-cell='0'></button>
        <button className="cell" data-cell='1'></button>
        <button className="cell" data-cell='2'></button>
        <button className="cell" data-cell='3'></button>
        <button className="cell" data-cell='4'></button>
        <button className="cell" data-cell='5'></button>
        <button className="cell" data-cell='6'></button>
        <button className="cell" data-cell='7'></button>
        <button className="cell" data-cell='8'></button>
      </div>
      <button id="reset-btn" onClick="resetGame()">Reset Game</button>
      <p id="status"></p>
    </div>
    </>
  )
}

export default App
