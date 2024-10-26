import { useEffect, useState } from "react"
import { ThemeProvider } from "./contexts/theme"
import Button from "./components/button"
import Card from "./components/card"


function App() {
  const [themeMode,setThemeMode]= useState('light')
  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  // Actual change in a Theme

  useEffect(()=>{
    var html = document.querySelector("html")
    html.classList.remove("light","dark")
    html.classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* Theme Button */}
                <Button/>
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/* Card */}
                <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
