import { useState, useContext } from 'react'

import { AuthContext } from '@contexts/AuthContext'

import { FPInputText } from '@FPCore/FPInputText/FPInputText'
import { FPInputPassword } from '@FPCore/FPInputPassword/FPInputPassword'
import { FPButton } from '@FPCore/FPButton/FPButton'

import './Login.scss'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const { authenticated, login } = useContext(AuthContext)

  const validateLogin = () => {
    setUsernameError('')
    setPasswordError('')

    if (!username) setUsernameError('Please enter a valid username.')
    if (!password) setPasswordError('Please enter your password.')

    return username && password
  }

  const handleLogin = async () => {
    if (!validateLogin()) return

    await login(username, password)

    if (!authenticated) {
      setUsernameError('Login failed! Username or password is incorrect.')
    }
  }

  return (
    <>
      <section className="login">
        <div className="login__background">
          <img src="/img/login-background.jpg" />
        </div>
        <div className="login__content">
          <div className="form">
            <div className="form__logo">
              <img src="/img/logo.png" />
            </div>

            <h1 className="form__title">Login to your account</h1>

            <form className="form__inputs">
              <div className="form__inputs-item">
                <FPInputText
                  label="Username"
                  isRequired
                  isInvalid={!!usernameError}
                  errorMessage={usernameError ?? ''}
                  value={username}
                  setValue={setUsername}
                />
              </div>
              <div className="form__inputs-item">
                <FPInputPassword
                  label="Password"
                  isRequired
                  isInvalid={!!passwordError}
                  errorMessage={passwordError ?? ''}
                  value={password}
                  setValue={setPassword}
                />
              </div>
              <div className="form__forgot-password">
                <a href="#">Forgot Password?</a>
              </div>

              <FPButton
                fullWidth
                text="Login"
                color="primary"
                size="lg"
                onClick={handleLogin}
              />
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
