import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Percentage from './components/percentage/Percentage'
import Volume from './components/volume/Volume'
import Length from './components/length/Length'
import Mass from './components/mass/Mass'
import Area from './components/area/Area'
import Age from './components/age/Age'
import UnitConverters from './components/unitConverters/UnitConverters'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>,
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
          path: "unit-converters",
          element: <UnitConverters setIsMenuOpen={setIsMenuOpen} />,
          children: [
            {
              path: "volume",
              element: <Volume />
            },
            {
              path: "length",
              element: <Length />
            },
            {
              path: "mass",
              element: <Mass />
            },
            {
              path: "area",
              element: <Area />
            },
          ]
        },
        {
          path: "age",
          element: <Age setIsMenuOpen={setIsMenuOpen} />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
  )
}

export default App
