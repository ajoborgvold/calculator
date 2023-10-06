import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Percentage from './components/percentage/Percentage'

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
        }
      ]
    },
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
