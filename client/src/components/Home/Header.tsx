import { User } from '../../types/UserTypes'
import Button from 'react-bootstrap/Button'

import { Profile } from '../Offcanvas'

import {NewMessageContainer as NewMessage } from '../../container/NewMessageContainer'

type Props = {
    user: User,
    logOut: () => void,
    handleShowProfile: () => void,
    handleCloseProfile: () => void,
    handleShowContacts: () => void,
    handleCloseContacts: () => void,
    showProfile: boolean,
    showContacts: boolean,
    selectChat: (chatInfo: string) => void
}

export const Header: React.FC<Props> = ({ user, logOut, handleShowProfile, handleCloseProfile, handleShowContacts,handleCloseContacts, showContacts, showProfile, selectChat }) => {


    return (
        <>

            <div className='header'>
                <div className='header--profile-button' style={{ backgroundImage: `url(${user.profilePic})` }} onClick={handleShowProfile}>
                </div>
                <Button onClick={handleShowContacts}>New Message</Button>
            </div>

            <Profile user={user} logOut={logOut} handleCloseProfile={handleCloseProfile} showProfile={showProfile} />

            <NewMessage user={user} handleCloseContacts={handleCloseContacts} showContacts={showContacts} selectChat={selectChat}/>
        </>
    )
}