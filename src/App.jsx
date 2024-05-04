import { useEffect, useState } from "react"



function App() {
  //all state
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(5);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);

  //Including Symbols
  function includeSymbol(e) {
    setSymbol(e.target.checked);
  }

  //Including Numbers
  function includeNumber(e) {
    setNumber(e.target.checked);
  }


  useEffect(() => {
    generatePassword()
  }, [symbol, length, number]);

  //Generating Password
  function generatePassword() {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let password = '';

    //conditions for number and symbol
    if (number) {
      str += '0123456789';
    }

    if (symbol) {
      str += '!@#$%^&*+-*/'
    }

    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let character = str.charAt(randomNumber);
      password += character;
    }

    setPassword(password);
  }

  return (
    <>
      <h1 className="text-center text-5xl mt-[13rem] font-semibold text-[#c4fd23]">Password Generator</h1>
      <p className="text-center text-white mt-10 text-[23px]">{password}</p>

      <div className="text-center mt-9">
        <label className="text-[18px] me-[10px] font-semibold border px-5 py-3 border-[#67ff00] text-white" htmlFor="length">{length}</label>
        <input className="bg-[#8e8e8e] appearance-none rounded-lg h-4" type="range" min={5} max={20} onChange={(e) => { setLength(e.target.value) }} value={length} />
      </div> <br />

      <div className="text-center text-[20px]">
        <span className="text-[#8e8e8e]">Symbol</span> <input type="checkbox" id="symbol" onChange={includeSymbol} />
        <span className="ms-10 text-[#8e8e8e]">Number </span> <input type="checkbox" id="number" onChange={includeNumber} />
      </div>

    </>
  )
}

export default App