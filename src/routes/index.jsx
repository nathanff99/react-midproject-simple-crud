import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '@contexts/AuthContext'

import { PublicRoutes } from '@routes/PublicRoutes'
import { PrivateRoutes } from '@routes/PrivateRoutes'

export const Routes = () => {
  const { authenticated } = useContext(AuthContext)
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated)

  useEffect(() => {
    setIsAuthenticated(authenticated)
  }, [authenticated])

  return isAuthenticated ? (
    <PrivateRoutes />
  ) : (
    <PublicRoutes authenticated={isAuthenticated} />
  )
}
