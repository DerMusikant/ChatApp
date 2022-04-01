import React from 'react'

import { UserCard } from './styles'
import { User } from '../../types/UserTypes'

interface Props {
  users: Array<User>
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return(
        <UserCard key={user._id}> {user.name}: {user._id} </UserCard>
        )
      })}
    </div>
  )
}

export default Users;
