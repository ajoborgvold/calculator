import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/routes/Layout'
import Home from './components/routes/Home'
import Percentage from './components/routes/Percentage'
import Time from './components/routes/Time'
import UnitConversion from './components/routes/UnitConversion'
import './App.css'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenu={toggleMenu}/>,
      children: [
        {
          index: true,
          element: <Home setIsMenuOpen={setIsMenuOpen} />
        },
        {
          path: "percentage",
          element: <Percentage setIsMenuOpen={setIsMenuOpen} />
        },
        {
          path: "unit-conversion",
          element: <UnitConversion setIsMenuOpen={setIsMenuOpen} />
        },
        {
          path: "time",
          element: <Time setIsMenuOpen={setIsMenuOpen} />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
  )
}

export default App
