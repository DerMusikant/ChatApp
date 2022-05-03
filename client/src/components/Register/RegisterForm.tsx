import { FC, useState } from 'react'
import { Alert, Form, Button } from 'react-bootstrap'

import { useInputValue } from '../../hooks/useInputValue'
import { postUser } from '../../services/user'

import { Activate } from '../../types/UserTypes'



export const RegisterForm: FC<{ activate: Activate }> = ({ activate }) => {

  const [error, setError] = useState(null)
  const name = useInputValue('')
  const description = useInputValue('')
  const twitter = useInputValue('')

  //Posts an user on the Database (name required)
  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!description.value) description.value='(No description)'

    if (!twitter.value) twitter.value='(No twitter)'

    postUser({ name: name.value, description: description.value, twitter: twitter.value })
      .then((data) => data ? activate(data) : console.log('Register problem'))
      .catch((e) => { setError(e) })
  }
  return (

    <Form className='mx-5 my-2' onSubmit={formSubmit}>
      { error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Make sure it's pretty cool!" {...name} />
        <Form.Text className="text-muted">
          Required field.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Short profile description for everyone to see!" {...description}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Twitter</Form.Label>
        <Form.Control type="text" placeholder="@UserExample" {...twitter}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  )
}