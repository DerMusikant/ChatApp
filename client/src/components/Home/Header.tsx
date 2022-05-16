import { User } from '../../types/UserTypes'
import { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

export const Header: React.FC<{ user: User, logOut: () => void }> = ({ user, logOut }) => {

    const [showProfile, setShowProfile] = useState(false)
    const [showContacts, setShowContacts] = useState(false)

    const handleLogOut = () => logOut()
    
    const handleShowProfile = () => setShowProfile(true)
    const handleCloseProfile = () => setShowProfile(false)

    const handleShowContacts = () => setShowContacts(true)
    const handleCloseContacts = () => setShowContacts(false)


    return (
        <>

            <div className='header'>
                <div className='header--profile-button' style={{backgroundImage: `url(${user.profilePic})`}} onClick={handleShowProfile}>
                </div>
                <Button onClick={handleShowContacts}>New Message</Button>
            </div>
            
            <Offcanvas show={showProfile} onHide={handleCloseProfile}>
                <Offcanvas.Header closeButton closeVariant='white'>
                    <Offcanvas.Title>Profile</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <img src={user.profilePic} alt='' />
                    <Button variant="outline-warning" onClick={handleLogOut}>
                        Log out
                    </Button>
                </Offcanvas.Body>
            </Offcanvas>

            <Offcanvas show={showContacts} onHide={handleCloseContacts}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Select contacts to start a chat with:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}