import { FC } from 'react'

import { useInputValue } from '../hooks/useInputValue'

import {postUser} from '../services/user'



export const Register: FC<{activate: (token: string) => void}> = ({activate}) => {

  const name = useInputValue('')
  const description = useInputValue('')
  const twitter = useInputValue('')
  
  const formSubmit = ( e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    postUser( {name: name.value, description: description.value, twitter: twitter.value } ).then((data) => data ? activate(data._id): console.log('not activated on register'))
  }
  return (
    <form onSubmit={formSubmit}>
      <input type="text" placeholder='Name' {...name} />
      <input type='text' placeholder='Description' {...description} />
      <input type="text" placeholder='Twitter' {...twitter} />
      <button type='submit'>Register</button>
    </form>
  )
}