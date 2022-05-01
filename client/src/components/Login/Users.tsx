import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { User } from '../../types/UserTypes'

interface Props {
  users: Array<User>,
  activate: (token: string) => void,
  loading: boolean
}

const Users: FC<Props> = ({ users, activate, loading }) => {

  //To map loading cards (User experience)
  let loadingUsers = [0,1,2,3,4,5,6,7,8,9]

  return (
    <>

      {/*Default register card*/}

      <Card className='register'>
        <Card.Body>
          <Card.Title>
            Register
          </Card.Title>
          <Card.Text>
            Chat in the best app with all your friends!
          </Card.Text>
          <Button>
            <Link to='/register' style={{ color: 'inherit', textDecoration: 'inherit' }}>
              Start now
            </Link>
          </Button>
        </Card.Body>
      </Card>
      <div className='users'>
        {
          !loading ?

          //Maps all users on bootstrap cards
            users.map((user) => (
              <Card key={user._id}>
                <Card.Body>
                  <Card.Title>
                    {user.name}
                  </Card.Title>
                  <Card.Text>
                    {user.description}
                    <br />
                    {user.twitter}
                  </Card.Text>
                  <Button onClick={() => activate(user._id)}>
                    Login as {user.name}
                  </Button>
                </Card.Body>
              </Card>
            )
            )
            :
            //This shows 10 loading cards for user feedback
            loadingUsers.map((data) => (
              <Card key={data}>
                <Card.Body>
                  <Card.Title>
                    Loading
                  </Card.Title>
                  <Card.Text>
                    Please, wait a moment...
                  </Card.Text>
                  <Button disabled={loading}>
                    Working on it!
                  </Button>
                </Card.Body>
              </Card>
            )
            )
        }
      </div >
    </>
  )
}

export default Users;
