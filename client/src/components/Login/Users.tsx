import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import { User, Activate } from '../../types/UserTypes'

interface Props {
  users: Array<User>,
  activate: Activate,
  loading: boolean
}

const Users: FC<Props> = ({ users, activate, loading }) => {

  //To map loading cards (User experience)
  let loadingUsers = [0,1,2,3,4]

  return (
    <>

      {/*Default register card*/}

      <Card className='register'>
        <Card.Img src='data:image/jpeg;base64,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' />
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
                <Card.Img src={user.profilePic } />
                <Card.Body>
                  <Card.Title>
                    {user.name}
                  </Card.Title>
                  <Card.Text>
                    {user.description}
                  </Card.Text>
                  <Card.Subtitle>
                    {user.twitter}
                  </Card.Subtitle>
                  <Button onClick={() => activate(user)}>
                    Login as {user.name}
                  </Button>
                </Card.Body>
              </Card>
            )
            )
            :
            //This shows 5 loading cards for user feedback
            loadingUsers.map((data) => (
              <Card key={data}>
                <Card.Img src='https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png' />
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
