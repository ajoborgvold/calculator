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
    setIsMenuOpen(!isMenuOpen)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "percentage",
          element: <Percentage />
        },
        {
          path: "unit-conversion",
          element: <UnitConversion />
        },
        {
          path: "time",
          element: <Time />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
