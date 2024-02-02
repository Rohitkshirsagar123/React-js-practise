
import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [marks,setmarks] = useState(20)
  // let marks=20

  const change_mark =()=>{
    console.log(marks)
    setmarks(2)
    
  }

  const get_data = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <h1>Currency Converter {marks}</h1>
      <button onClick={change_mark}>update</button>

      <button onClick={get_data} className='p-5 '>get api data</button>

      <div className="displaydata">
          {data.map((user) => (
            <div key={user.id}>{user.username}</div>
          ))}
      </div>

    </>
  )
}

export default App
