import './App.css'
import Card from './Components/card'

function App() {

  return (
    <>
      <h1 className='bg-blue-700 rounded-xl mb-5'> tailwind and props </h1>

      <Card name = "web dev" price = "1000" />
      <Card name = "full stack" price = "5000"/>
      <Card name = "data analyst" price = "5500"/>

    </>
  )
}

export default App
