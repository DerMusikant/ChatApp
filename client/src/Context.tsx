import { createContext, useState, PropsWithChildren } from 'react'

interface contextInterface {
  user: string,
  isAuth: boolean,
  activateAuth: (token: string) => void,
  removeAuth: () => void
}

export const Context = createContext({} as contextInterface)

const Provider = ({children}: PropsWithChildren<{}>) => {
  const [isAuth, setIsAuth] = useState(window.sessionStorage.getItem('token') != null)
  const [user, setUser] = useState('')

  const value: contextInterface = {
    user,
    isAuth,
    activateAuth: (token) => {
      console.log('token: ', token)
      setUser(token)
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false);
      window.sessionStorage.removeItem("token")
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}