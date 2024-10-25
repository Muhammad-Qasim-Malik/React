import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Main aur Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
