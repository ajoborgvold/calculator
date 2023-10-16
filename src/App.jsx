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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/percentage",
          element: <Percentage />
        },
        {
          path: "/unit-converters",
          element: <UnitConverters />,
          children: [
            {
              path: "/unit-converters/volume",
              element: <Volume />
            },
            {
              path: "/unit-converters/length",
              element: <Length />
            },
            {
              path: "/unit-converters/mass",
              element: <Mass />
            },
            {
              path: "/unit-converters/area",
              element: <Area />
            },
          ]
        },
        {
          path: "/age",
          element: <Age />
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
