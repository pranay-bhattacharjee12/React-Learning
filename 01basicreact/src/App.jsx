import Test from "./Test"   // Test -> component name, it should start with capital letter

function App() {

  const name = "shan"   //{var} -> evaluated expression omly witten in return statement, 
  // it is used to display dynamic data in the UI, 
  // it is also used to pass data to child components as props

  return (

    //that is called fragment in react, it is used to wrap multiple elements 
    //without adding extra nodes to the DOM
    <>
    <Test/>
    <h1>Hello world, Welcome {name}!</h1>   
    </>

  )
}

export default App
