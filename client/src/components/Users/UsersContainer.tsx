import React from 'react'

import { getUsers } from '../../services/user'
import UserList from './Users'
import { NavigationItem, User } from '../../types'

interface Props {}

const UsersContainer: React.FC<Props> = () => {
  const [users, setUsers] = React.useState([])
  const [error, setError] = React.useState('')

  React.useEffect(() => {

    // Calls fetching user function and sets its value on 'users'
    async function getUsersAsync() {
      try {
        const data = await getUsers()
        if (!data) return

        const { error, body } = data
        if (error) {
          setError('Error fetching users')
          return
        }
        setUsers(body)
      } catch (e) {
        setError('Error fetching users')
      }
    }

    getUsersAsync()
  }, []);

  return (
    <>
      {error && <div>{error}</div>}
      {users && <UserList users={users} />}
    </>
  );
};

export default UsersContainer
