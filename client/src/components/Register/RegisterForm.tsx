import { FC, useRef } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'

import { Activate, User } from '../../types/UserTypes'


interface Props {
  activate: Activate,
  name: {
    value: any,
    onChange: (e: { target: HTMLInputElement }) => void
  },
  description: {
    value: any,
    onChange: (e: { target: HTMLInputElement }) => void
  },
  twitter: {
    value: any,
    onChange: (e: { target: HTMLInputElement }) => void
  },
  setUsers: (users: User[]) => void,
  setError: (error: string) => void,
  error: string,
  submit: (file) => void
}


export const RegisterForm: FC<Props> = ({ activate, name, description, twitter, setUsers, setError, error, submit }) => {


  const file = useRef(null)

  //Posts an user on the Database (name required)
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    submit(file)
  }


  return (

    <Form className='mx-5 my-2' onSubmit={formSubmit}>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Make sure it's pretty cool!" {...name} />
        <Form.Text className="text-muted">
          Required field.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Short profile description for everyone to see!" {...description} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Twitter</Form.Label>
        <Form.Control type="text" placeholder="@UserExample" {...twitter} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="file" ref={file} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  )
}