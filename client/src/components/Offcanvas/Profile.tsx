import { User } from '../../types/UserTypes'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'
import React from 'react'

type Props = {
    user: User,
    showProfile: boolean,
    logOut: () => void,
    deleteAccount: () => void,
    handleCloseProfile: () => void,
}

export const Profile: React.FC<Props> = ({ user, logOut, handleCloseProfile, showProfile, deleteAccount }) => {
    return (
        <>
            <Offcanvas show={showProfile} onHide={handleCloseProfile}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='offcanvas--profile-pic'>
                        <img src={user.profilePic} />
                    </div>
                    <span>Name: </span>
                    <p>{user.name}</p>
                    <span>Description:</span>
                    <p>{user.description}</p>
                    <span>Twitter: </span>
                    <p>{user.twitter}</p>
                    <Button variant="outline-warning" onClick={logOut}>
                        Log out
                    </Button>
                    <Button variant="outline-danger" onClick={deleteAccount}>
                        Delete Account
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}