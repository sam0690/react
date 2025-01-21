import { useState , useCallback, useEffect ,useRef } from 'react'

import './App.css'

function App() {
    const [length , setLength] = useState(8)
    const [numAllow , setnumAllow] = useState(false)
    const [charAllow , setcharAllow] = useState(false)
    const [password , setpassword] = useState("")
  
    const  passwordGenerator = useCallback(()=>{
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numAllow) {str+='0123456789'}
      if (charAllow) {str+='!@#$%^*()_-+[]{}:;"|<>?|€'}
      for (let i=1 ; i < length; i++){
        let char = Math.floor(Math.random() * str.length + 1) 
        pass += str.charAt(char)
      }
      setpassword(pass)
  
    }, [numAllow,charAllow,length,setpassword])
  
    useEffect(()=>{
      passwordGenerator()
    },[numAllow,charAllow,length,setpassword])
  
  
    let slider = document.querySelector("#slider")
  
  

  return (
    <>
     <div className='flex-col bg-green-300 rounded-md h-full w-max m-5 justify-center p-6'>
      <h2 className='text-2xl'>Password Generator</h2>
      <div className=" flex-auto justify-center h-max align-middle ">
     
        <input className='outline-none' type="text" placeholder='passeord' value={password} />
        <button className='justify-center  rounded-md bg-pink-300 text-10px p-5 mx-3 text-center'  id="btn">   Copy 
        </button>
      </div>

      <div className='flex-row p-3'>
        <input type="range" id='slider'  max={16} min={8} value={length} onChange={()=>{
          setLength(slider.value)
          console.log("WTHA THE FUCK")}}
        />
        <label htmlFor="" className='label' >Length : {length} </label>

        <input type="checkbox" onClick={()=>{
          if (numAllow==true) {setnumAllow(false)
          }
          else {setnumAllow(true)
          }
        }}/>
        <label htmlFor="" className='label' > Numbers </label>

        <input type="checkbox" onClick={()=>{
          if (charAllow==true) {setcharAllow(false) 
            }
            else {setcharAllow(true)
            }
        }}/>
        <label htmlFor="" className='label' > Characters </label>
      </div>
    </div>


    </>
  )
}

export default App
