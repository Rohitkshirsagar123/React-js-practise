import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [ctext, settext] = useState("copy");

  // useref 
  let passswordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copypasswordclipboard = useCallback(() => {
    passswordRef.current?.select();
    settext("copied");
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const handleNumberCheckboxChange = () => {
    setNumberAllowed(!numberAllowed);
    setCharAllowed(!charAllowed);
    
    settext("copy"); // Set text to "copy" when the checkbox for numbers is clicked
  };

  // const handleCharCheckboxChange = () => {
  //   setCharAllowed(!charAllowed);
  //   settext("copy");
  // };

  return (
    <>
      <div className=' w-full h-screen main_div'> 
        <div className='pass_sec'>
          <center> <h1 className='font-bold mb-3 text-xl'>password generator in React</h1> </center>
          <div className="first_sec">
              <input 
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              readOnly
              ref={passswordRef}
               />
              <button 
              className='btn'
              onClick={copypasswordclipboard}
              >{ctext}</button>
          </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={8}
              max={25}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value);  settext("copy");}}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={numberAllowed}
                    id="numberInput"
                    onChange={handleNumberCheckboxChange}
                />
                <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
                <input
                    type="checkbox"
                    defaultChecked={charAllowed}
                    id="characterInput"
                    onChange={handleNumberCheckboxChange}
                />
                <label htmlFor="characterInput">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
