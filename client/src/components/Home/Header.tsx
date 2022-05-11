import { User } from '../../types/UserTypes'
import Button from 'react-bootstrap/Button'

export const Header: React.FC<{user: User, logOut: () => void}> = ({user, logOut}) => {

    const handleClick = () => {
        logOut()
    }

    return (
        <>
            <Button variant="outline-warning" onClick={handleClick}>Log out</Button>
        </>
    )
}