import { useState } from 'react';
import './App.css'; // Ensure this imports Tailwind CSS

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div 
      className="w-screen h-screen duration-200 " 
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded">
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "olive" }} 
            onClick={() => setColor("olive")} 
          >
            Olive
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "red" }} 
            onClick={() => setColor("red")} 
          >
            Red
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Yellow" }} 
            onClick={() => setColor("Yellow")} 
          >
            Yellow
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Black" }} 
            onClick={() => setColor("Black")} 
          >
            Black
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Orange" }} 
            onClick={() => setColor("Orange")} 
          >
            Orange
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Green" }} 
            onClick={() => setColor("Green")} 
          >
            Green
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Gray" }} 
            onClick={() => setColor("Gray")} 
          >
            Gray
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Teal" }} 
            onClick={() => setColor("Teal")} 
          >
            Teal
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Pink" }} 
            onClick={() => setColor("Pink")} 
          >
            Pink
          </button>
          <button 
            className='block outline-none p-2 text-white rounded' 
            style={{ backgroundColor: "Blue" }} 
            onClick={() => setColor("blue")} 
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
