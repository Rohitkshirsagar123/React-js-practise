import './App.css'
import Card from './card';



function App() {
  var objval={
    name:"rk",
    age:20
  }
   
  return (
    <>
      <h1 className='bg-black text-white p-5 mb-10'>React Props Practise 20 october 2023 </h1>
      <button>click</button>
      <Card val = "rk" data={objval} />
      <Card val = "rohit"  />
    </>
  )
}

export default App
