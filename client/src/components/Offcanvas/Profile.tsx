import { User } from '../../types/UserTypes'

import Alert from 'react-bootstrap/Alert'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

import React from 'react'

type Props = {
    user: User,
    showProfile: boolean,
    showDeleteAccount: boolean,
    logOut: () => void,
    deleteAccount: () => void,
    handleCloseProfile: () => void,
    setShowDelete: (show: boolean) => void,
    reference: (ref: object) => void
}

export const Profile: React.FC<Props> = ({ user, logOut, handleCloseProfile, showProfile, showDeleteAccount, setShowDelete, deleteAccount, reference }) => {

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
                    {
                        showDeleteAccount ?
                            <div ref={reference}>
                                <Alert variant='danger' onClose={() => setShowDelete(false)} dismissible>
                                    <Alert.Heading>Are you sure?</Alert.Heading>
                                    <p>
                                        Deleting an account is forever! You won't find it ever again...
                                    </p>
                                    <Button variant="outline-danger" onClick={deleteAccount}>
                                        Delete Account
                                    </Button>
                                </Alert>
                            </div>
                            :
                            <Button variant="outline-danger" onClick={() => {setShowDelete(true)}}>
                                Delete Account
                            </Button>
                    }

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}