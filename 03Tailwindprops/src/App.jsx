import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className='flex gap-20'>
      {/* <h1 className='bg-green-400 p-4 text-black rounded-xl'>Tailwind Test</h1> */}
      <Card imgsrc="https://www.pexels.com/photo/skyscrapers-in-manhattan-in-new-york-27068604/" title = "Qasim" content = "You need to keep the import React from 'react' line because JSX syntax gets converted into React.createElement calls behind the scenes."/>
      <Card imgsrc="https://www.pexels.com/photo/close-up-of-a-purple-aster-in-autumn-bloom-28492538/" title = "Malik" content = "You need to keep the import React from 'react' line because JSX syntax gets converted into"/>
      <Card  title = "Noman" content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, deleniti!"/> 
    </div>
  )
}

export default App
