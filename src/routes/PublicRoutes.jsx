import { Routes, Route, Navigate } from 'react-router-dom'

import { Login } from '@pages/Login/Login'

export const PublicRoutes = ({ authenticated }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={!authenticated ? <Login /> : <Navigate to="/" />}
      />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/payment-links" element={<Navigate to="/login" />} />
      <Route path="/payment-link/add" element={<Navigate to="/login" />} />
      <Route
        path="/payment-link/update/:id"
        element={<Navigate to="/login" />}
      />
    </Routes>
  )
}
