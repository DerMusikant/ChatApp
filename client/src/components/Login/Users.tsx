import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { User } from '../../types/UserTypes'

interface Props {
  users: Array<User>
}

const Users: FC<{ users: Array<User>, activate: (token: string) => void }> = ({ users, activate }) => {
  return (
    <div className='users'>
      <Card>
        <Link to='/register' style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <Card.Body>
            <Card.Text>
              Register
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>

      {
        users.map((user) => {
          return (
            <Card key={user._id} onClick={() => activate(user._id)} className='pointer'>
              <Card.Body>
                <Card.Text>
                    {user.name}
                    <br />
                    {user.description}
                    <br />
                    {user.twitter}
                </Card.Text>
              </Card.Body>
            </Card>
          )
        })
      }
    </div >
  )
}

export default Users;
