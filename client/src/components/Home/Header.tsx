import { User } from '../../types/UserTypes'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

type Props = {
    user: User,
    logOut: () => void,
    handleShowProfile: () => void,
    handleCloseProfile: () => void,
    handleShowContacts: () => void,
    handleCloseContacts: () => void,
    showProfile: boolean,
    showContacts: boolean
}

export const Header: React.FC<Props> = ({ user, logOut, handleShowProfile, handleCloseProfile, handleShowContacts,handleCloseContacts, showContacts, showProfile }) => {


    return (
        <>

            <div className='header'>
                <div className='header--profile-button' style={{ backgroundImage: `url(${user.profilePic})` }} onClick={handleShowProfile}>
                </div>
                <Button onClick={handleShowContacts}>New Message</Button>
            </div>

            <Offcanvas show={showProfile} onHide={handleCloseProfile}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <img src={user.profilePic} alt='' />
                    <Button variant="outline-warning" onClick={logOut}>
                        Log out
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showContacts} onHide={handleCloseContacts}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Select contacts to start a chat with:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}