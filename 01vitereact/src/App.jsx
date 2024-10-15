import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const qasim = "Qasim"
  return (
    <>
      <div>
        <h1>Hello | Muhammad {qasim}</h1>
        <h2>Hello | Muhammad Qasim</h2>
        <h3>Hello | Muhammad Qasim</h3>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus beatae facilis quasi quibusdam totam in, quis maiores necessitatibus nisi voluptatem voluptatum veniam eligendi eius obcaecati ad! Eligendi, illo corrupti!
      </p>
    </>
  )
}

export default App
