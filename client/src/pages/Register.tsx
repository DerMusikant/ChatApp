import { RegisterForm } from '../components/Register/RegisterForm'

import {Activate} from '../types/UserTypes'



export const Register: React.FC<{ activate: Activate }> = ({ activate }) => {

  return (
    <>
      <h2>Register today to chat with all your friends!</h2>
      <RegisterForm activate={activate} />
    </>
  )
}