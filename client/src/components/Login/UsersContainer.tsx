import React, { useContext } from 'react'

import {Context} from '../../Context'
import { getUsers } from '../../services/user'
import UserList from './Users'
import { NavigationItem, User } from '../../types/UserTypes'

interface Props {}

export const UsersContainer: React.FC<Props> = (  ) => {

  
  const { activateAuth } = useContext(Context)

  const [users, setUsers] = React.useState<User[]>([])
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(true)  

  React.useEffect(() => {

    // Calls fetching user function and sets its value on 'users', if not user, sets loading/error
    async function getUsersAsync() {
      try {
        const data = await getUsers()
        if (!data) return

        const { error, body } = data

        if (error) {
          setLoading(false)
          setError(error)
          return
        }
        setLoading(false)
        setUsers(body)
      } catch (e) {
        setError('Error fetching users')
      }
    }

    getUsersAsync()
  }, []);

  return (
    <>
      {error && console.log(error)}
      <UserList users={users} activate={activateAuth} loading={loading}/>
    </>
  );
};

