import {useContext} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import { Context } from './Context' 


import {Register, NotRegistered} from './pages'

import './Styles.css'

export const App = () => {

    const {user, isAuth, activateAuth} = useContext(Context)

    return (
        <>
      <Router>
          <Routes>
            <Route path='/' element={ isAuth ? <h2>Main</h2> : <NotRegistered />} />
            <Route path='/login' element={isAuth ? <Navigate replace to='/' /> : <NotRegistered />} />
            <Route path='/register' element={isAuth ? <Navigate replace to='/' /> : <Register activate={activateAuth} />} />
          </Routes>
      </Router>
    </>
    )
}