import { createContext, useState, useEffect } from 'react'

export const SidebarContext = createContext({})

export const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    if (window.innerWidth <= 1535) {
      setSidebarOpen(false)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  const handleResize = () => {
    if (window.innerWidth <= 1535) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  )
}
