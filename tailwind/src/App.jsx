import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {

  return (
    <>

    <h1 className='bg-purple-950 p-4 text-blue-300 rounded-xl mb-5'>Tailwind CSS</h1>
    <Card username='Samriddha' btntext='Click me'/>
    <Card username='Sahan' btntext='Vist me please.'/>
    </>
  )
}

export default App
