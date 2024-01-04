import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/routes/Layout'
import Home from './components/routes/Home'
import Percentage from './components/routes/Percentage'
import Time from './components/routes/Time'
import UnitConversion from './components/routes/UnitConversion'
import Error from './components/Error'
import './App.css'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
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
    {
      path: "*",
      element: <Error />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
