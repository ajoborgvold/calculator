import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Percentage from './components/percentage/Percentage'
import Volume from './components/volume/Volume'
import Length from './components/length/Length'
import Age from './components/age/Age'

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
          path: "/volume",
          element: <Volume />
        },
        {
          path: "/length",
          element: <Length />
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
