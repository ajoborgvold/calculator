import { useState, useEffect } from "react"

//=== TRACK THE USER'S WINDOW WIDTH ===//
export default function useGetWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [setWindowWidth])

  return windowWidth
}
