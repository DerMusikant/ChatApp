import React from 'react'

import Card from 'react-bootstrap/Card'
import { User } from '../../types/UserTypes'

interface Props {
  users: Array<User>
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return(
        <Card key={user._id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
              <p>
              {user.name}: {user._id}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>
        )
      })}
    </div>
  )
}

export default Users;
