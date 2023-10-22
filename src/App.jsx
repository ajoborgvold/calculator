import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/routes/Layout'
import Home from './components/routes/Home'
import Percentage from './components/routes/Percentage'
import UnitConverters from './components/routes/UnitConverters'
import AllConverters from './components/converters/AllConverters'
import Volume from './components/converters/Volume'
import Length from './components/converters/Length'
import Mass from './components/converters/Mass'
import Area from './components/converters/Area'
import Temperature from './components/converters/Temperature'
import Time from './components/routes/Time'
import Testing from './components/converters/Testing'
import NewUnitConverters from './components/routes/NewUnitConverters'
import NewAllConverters from './components/newConverters/NewAllConverters'
import NewVolume from './components/newConverters/NewVolume'
import NewLength from './components/newConverters/NewLength'
import NewMass from './components/newConverters/NewMass'
import NewArea from './components/newConverters/NewArea'
import NewTemperature from './components/newConverters/NewTemperature'

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
        // {
        //   path: "unit-converters",
        //   element: <UnitConverters setIsMenuOpen={setIsMenuOpen} />,
        //   children: [
        //     {
        //       index: true,
        //       element: <AllConverters />
        //     },
        //     {
        //       path: "volume",
        //       element: <Volume />
        //     },
        //     {
        //       path: "length",
        //       element: <Length />
        //     },
        //     {
        //       path: "mass",
        //       element: <Mass />
        //     },
        //     {
        //       path: "area",
        //       element: <Area />
        //     },
        //     {
        //       path: "temperature",
        //       element: <Temperature />
        //     },
        //     {
        //       path: "testing",
        //       element: <Testing />
        //     }
        //   ]
        // },
        {
          path: "new-unit-converters",
          element: <NewUnitConverters setIsMenuOpen={setIsMenuOpen} />,
          children: [
            {
              index: true,
              element: <NewAllConverters />
            },
            {
              path: "volume",
              element: <NewVolume />
            },
            {
              path: "length",
              element: <NewLength />
            },
            {
              path: "mass",
              element: <NewMass />
            },
            {
              path: "area",
              element: <NewArea />
            },
            {
              path: "temperature",
              element: <NewTemperature />
            }
          ]
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
