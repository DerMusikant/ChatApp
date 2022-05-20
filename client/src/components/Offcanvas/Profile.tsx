import { User } from '../../types/UserTypes'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

type Props = {
    user: User,
    logOut: () => void,
    handleCloseProfile: () => void,
    showProfile: boolean
}

export const Profile: React.FC<Props> = ({ user, logOut, handleCloseProfile, showProfile }) => {


    return (
        <>
            <Offcanvas show={showProfile} onHide={handleCloseProfile}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <img src={user.profilePic} alt={`${user.name}'s profile picture`} />
                    <span>Name: </span>
                    <p>{user.name}</p>
                    <span>Description:</span>
                    <p>{user.description}</p>
                    <span>Twitter: </span>
                    <p>{user.twitter}</p>
                    <Button variant="outline-warning" onClick={logOut}>
                        Log out
                    </Button>
                    <Button variant="outline-danger">
                        Delete Account
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}