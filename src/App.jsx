import { Routes } from '@routes/index.jsx'
import { AuthProvider } from '@contexts/AuthContext'

export const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  )
}
