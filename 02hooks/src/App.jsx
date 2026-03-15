import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //here we are using useState hook to create a state variable 'cnt' 
  //and a function 'SetCnt' to update the value of 'cnt'. 
  let [cnt, SetCnt] = useState(0);    //The initial value of 'cnt' is set to 0.
  
  //The 'addvalue' function is defined to increment the value of 'cnt' by 1,
  //but it also checks if 'cnt' is greater than or equal to 10. 
  //If it is, it resets 'cnt' back to 0 instead of incrementing it further.
  const addvalue = () => {
    if(cnt >= 10) {
      SetCnt(0);
    } else {
      SetCnt(cnt + 1);
    }
  }

  //The 'decresevalue' function is defined to decrement the value of 'cnt' by 1,
  //but it also checks if 'cnt' is less than or equal to 0. 
  //If it is, it keeps 'cnt' at 0 instead of decrementing it further.
  const decresevalue = () => {
    if (cnt <= 0) {
      SetCnt(0);
    } else {
      SetCnt(prevcnt => prevcnt - 1);
    }
  }

  return (
    <>
      <h1>learn react hooks(usestate)</h1>

      <h2>counter value: {cnt}</h2>
      
      <button onClick={addvalue}>increment the value {cnt} </button>
      <br />
      <button onClick={decresevalue}>remove the value {cnt} </button>
      
    </>
  )
}

export default App
