import { useState , useCallback, useEffect ,useRef } from 'react'

import './App.css'

function App() {
    const [length , setLength] = useState(8)
    const [numAllow , setnumAllow] = useState(false)
    const [charAllow , setcharAllow] = useState(false)
    const [password , setpassword] = useState("")

    const passwordRef = useRef(null);
  
    const  passwordGenerator = useCallback(()=>{
      let pass = ''
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if (numAllow) {str +='0123456789'}
      if (charAllow) {str +='!@#$%^*()_-+[]{}:;"|<>?|€'}
      for (let i=1 ; i <= length; i++){
        let char = Math.floor(Math.random() * str.length + 1) 
        pass += str.charAt(char)
      }
      setpassword(pass)
  
    }, [numAllow,charAllow,length,setpassword])

    const copyPassword = useCallback(()=>{
      // passwordRef.current?.select();
      if (passwordRef.current){
        passwordRef.current.select();
      }
      passwordRef.current?.setselectionRange(0,999);
      window.navigator.clipboard.writeText(password)

    },[password])
  
    useEffect(()=>{
      passwordGenerator()
    },[numAllow,charAllow,length,setpassword])
  
  
    
  
  

  return (
    <>
     <div className='bg-green-300 shadow-md rounded-md w-full max-w-md mx-auto justify-center p-6 my-5'>
      <h2 className='text-2xl p-3 text-center'>Password Generator</h2>
      <div className=" flex shadow rounded-md  h-max overflow-hidden mb-4 ">
        <input className='outline-none py-2 w-full px-3 text-md rounded-md' type="text" placeholder='password' value={password} readOnly />
        <button className=' outline-none justify-center rounded-md bg-pink-300 text-10px px-3 py-0.5 shrink-0 mx-3 text-center'  id="btn" onClick={copyPassword}>   Copy 
        </button>
      </div>

      <div className='flex gap-x-2 text-sm'>
        <input type="range" id='slider'  max={16} min={8} value={length} className='cursor-pointer' onChange={(e)=>{
          setLength(e.target.value)
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
