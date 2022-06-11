import { FC, useState } from 'react'

import {RegisterForm } from '../components/Register/RegisterForm'

import { useInputValue } from '../hooks/useInputValue'

import { postChat } from '../services/chat'
import { postUser, getUsers } from '../services/user'

import { Activate, User } from '../types/UserTypes'



export const RegisterFormContainer: FC<{ activate: Activate }> = ({ activate }) => {

  const [users, setUsers] = useState<User[]>(null)
  const [error, setError] = useState('')
  const name = useInputValue('')
  const description = useInputValue('')
  const twitter = useInputValue('')


  //Posts an user on the Database (name required)
  const formSubmit = (file) => {

    //Creates every chat for the new user
    const createChats = (user: User, filter: User[]) => {
      const event = new Event('ChatsPosted')
      filter.forEach( async (value) => {
        postChat({name: `${user.name}/${value.name}`, users:[user._id, value._id]})
      })

      document.dispatchEvent(event)

    }


    // Calls fetching user function and sets its value on 'users', if not user, sets loading/error
    async function getUsersAsync(filter: User) {
      try {
        const data = await getUsers()
        if (!data) return

        const { error, body } = data

        if (error) {
          setError(error)
          return
        }
        const filtered = body.filter((element) => {
          return element._id != filter._id
        })

        createChats(filter, filtered)
      } catch (e) {
        setError('Error fetching users')
      }
    }

    if (!description.value) description.value = '(No description)'

    if (!twitter.value) twitter.value = '(No twitter)'

    postUser({ name: name.value, description: description.value, twitter: twitter.value, file: file.current.files[0] })
      .then(
        (data) => {
          if (data) {
            activate(data)
            getUsersAsync(data)
          }
          else {
            console.log('Register problem')
          }
        })
      .catch((e) => { setError(e) })
  }


  return (

    <RegisterForm setUsers={setUsers} setError={setError} error={error} activate={activate} name={name} description={description} twitter={twitter} submit={formSubmit}/>
  )
}