import { createContext, useState, PropsWithChildren } from 'react'

import {User, Activate} from './types/UserTypes'

interface contextInterface {
  user: User,
  isAuth: boolean,
  activateAuth: Activate,
  removeAuth: () => void
}

export const Context = createContext({} as contextInterface)

const Provider = ({children}: PropsWithChildren<{}>) => {

  const noUser = {
    _id: '',
    name: '',
    description: '',
    twitter: ''
  }

  const [isAuth, setIsAuth] = useState<boolean>(window.sessionStorage.getItem('token') != null)
  const [user, setUser] = useState<User>(noUser)

  const value: contextInterface = {
    user,
    isAuth,
    activateAuth: (loggedUser) => {
      setUser(loggedUser)
      setIsAuth(true)
      window.sessionStorage.setItem('token', loggedUser._id)
    },
    removeAuth: () => {
      setUser(noUser)
      setIsAuth(false)
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