import { User } from '../types/UserTypes'

export const Home: React.FC<{ user: User }> = ({ user }) => {

    return (
        <>


            <h2>Pic: {user.fileDestination}</h2>

        </>
    )
}