import {useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import {NotRegistered} from './pages/NotRegistered'
import Users from './components/Users/UsersContainer'
import { Context } from './Context' 
import GlobalStyle from './styles/global'

export const App = () => {

    const {isAuth} = useContext(Context)

    return (
        <>
        <GlobalStyle />
      <Router>
          <Routes>
            <Route path='/' element={ isAuth ? <h2> home</h2> : <NotRegistered />} />
            <Route path='/chat/:id' element={ isAuth? <h2>chat</h2> : <h2>login</h2>} />
            <Route path='/user/:id' element={ isAuth? <h2>userProfile</h2> : <h2>login</h2>} />
            <Route path='/login' element={isAuth ? <Navigate replace to='/' /> : <h2>Not Registered</h2>} />
          </Routes>
      </Router>
    </>
    )
}