import { RegisterForm } from '../components/Register/RegisterForm'



export const Register: React.FC<{ activate: (token: string) => void }> = ({ activate }) => {

  return (
    <>
      <h2>Register today to chat with all your friends!</h2>
      <RegisterForm activate={activate} />
    </>
  )
}