import './App.css'
import Login from './Component/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Component/Profile'

function App() {

  return (
    <UserContextProvider>
      <>hello ji</>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
