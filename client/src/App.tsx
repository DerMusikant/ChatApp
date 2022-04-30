import {useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import { UsersContainer as Users } from './components/Login/UsersContainer'
import { Context } from './Context' 


import {Register, NotRegistered} from './pages'

import './Styles.css'

export const App = () => {

    const {isAuth, activateAuth} = useContext(Context)

    return (
        <>
      <Router>
          <Routes>
            <Route path='/' element={ isAuth ? <h2>Main</h2> : <Users />} />
            <Route path='/chat/:id' element={ isAuth? <h2>chat</h2> : <NotRegistered />} />
            <Route path='/user/:id' element={ isAuth? <h2>userProfile</h2> : <NotRegistered />} />
            <Route path='/login' element={isAuth ? <Navigate replace to='/' /> : <NotRegistered />} />
            <Route path='/register' element={isAuth ? <Navigate replace to='/' /> : <Register activate={activateAuth} />} />
          </Routes>
      </Router>
    </>
    )
}