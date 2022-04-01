import {useContext, FC} from 'react'
import { Link } from 'react-router-dom'

import {postUser} from '../services/user'
import {Context} from '../Context'
import {Post, User, PostPromise} from '../types/UserTypes'



export const Register: FC<{activate: (token: string) => void}> = ({activate}) => {
    
    const formSubmit = ( input: Post ) => {
        postUser( input ).then((data) => data ? activate(data._id): console.log('not activated on register'))
      }
      return (

        <button onClick={() => formSubmit({"name": "Hello from Register","description": "Just testing", "twitter": "@test"})}>
          Register
        </button>
      )
}