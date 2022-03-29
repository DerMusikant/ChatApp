import React from 'react'

import { User } from '../../types'

interface Props {
  users: Array<User>
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return(
        <h2 key={user._id}> {user.name}: {user._id} </h2>
        )
      })}
    </div>
  )
}

export default Users;
