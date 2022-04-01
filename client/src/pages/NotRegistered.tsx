import {useContext} from 'react'
import { Link } from 'react-router-dom'

import { Register } from './Register'
import {Context} from '../Context'

export const NotRegistered = () => {
    const { activateAuth } = useContext(Context)
    
    return (
        <>
            < Register activate= {activateAuth} />


        </>
    )
}