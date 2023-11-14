import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import userService from '@services/user'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = () => {
      try {
        const storagedUser = localStorage.getItem('@PayFast:user')

        if (storagedUser) {
          setUser(JSON.parse(storagedUser))
        }

        setLoading(false)
      } catch (error) {
        console.error('Error fetching user data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const login = async (username, password) => {
    try {
      const response = await userService.login(username, password)

      if (response) {
        localStorage.setItem('@PayFast:user', JSON.stringify(response))
        setUser(response)
      }
    } catch (error) {
      console.error('Error during login:', error)
    }
  }

  const logout = () => {
    localStorage.removeItem('@PayFast:user')
    setUser(null)
    navigate('/login')
  }

  if (loading) return

  return (
    <AuthContext.Provider
      value={{ authenticated: Boolean(user), user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
