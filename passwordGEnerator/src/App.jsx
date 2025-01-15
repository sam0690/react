import { useState , useCallback } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numAllow , setnumAllow] = useState(false)
  const [charAllow , setcharAllow] = useState(false)
  const [password , setpassword] = useState("")

  const  passwordGenertor = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numAllow) str+='0123456789'
    if (charAllow) str+='!@#$%^*()_-+[]{}:;"|<>?|€'

  }, [numAllow,charAllow,length,setpassword])


  return (
    <>
    <div className="container">

      <h1 className='text-4xl text-center'>Password Generator</h1>

      {/* <input type="text" className='text-4xl' /> */}

      <div className='mt-3 '>
        <input type="range" defaultValue={0} max={16} min={8} />
        <label htmlFor="" className='text-2xl text-center'>Length : {length}</label>
        <input type="checkbox" onClick={setnumAllow}/>
        <label htmlFor="" >Numbers</label>
        <input type="checkbox" onClick={setcharAllow} />
        <label htmlFor="">Characters</label>
      </div>

     

    </div>
   

    </>
  )
}

export default App
