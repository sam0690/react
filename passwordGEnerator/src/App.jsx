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
    <div className='conatiner'>
      <h2 className='title'>Password Generator</h2>
      <div className="top">
     
        <input type="text" placeholder='passeord' value={password} />
        <button className='outline-none h-5 w-full rounded-md ' id="btn">
          copy
        </button>
      </div>

      <div className='displaybox'>
        <input type="range" id='slider' defaultValue={8} max={16} min={8} value={length} onInput={()=>{
          setLength(slider.value)
          console.log("WTHA THE FUCK")}}
        />
        <label htmlFor="" className='label' >Length : {length}</label>

        <input type="checkbox" onClick={()=>{
          if (numAllow==true) {setnumAllow(false)
          }
          else {setnumAllow(true)
          }
        }}/>
        <label htmlFor="" className='label' >Numbers</label>

        <input type="checkbox" onClick={()=>{
          if (charAllow==true) {setcharAllow(false) 
            }
            else {setcharAllow(true)
            }
        }}/>
        <label htmlFor="" className='label' >Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
