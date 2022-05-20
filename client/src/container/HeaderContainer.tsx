import { User } from '../types/UserTypes'
import { useState } from 'react'

import { Header } from '../components/Home/Header'

type Props = {
    user: User,
    logOut: () => void,
    selectChat: (chatInfo: string) => void
}

export const HeaderContainer: React.FC<Props> = ({ user, logOut, selectChat }) => {

    const [showProfile, setShowProfile] = useState(false)
    const [showContacts, setShowContacts] = useState(false)
    
    const handleShowProfile = () => setShowProfile(true)
    const handleCloseProfile = () => setShowProfile(false)

    const handleShowContacts = () => setShowContacts(true)
    const handleCloseContacts = () => setShowContacts(false)

    const handlers = { handleShowProfile, handleCloseProfile, handleShowContacts, handleCloseContacts }

    const states = {showProfile, showContacts}


    return (
        <>
            <Header user={user} logOut={logOut} {...handlers} {...states} selectChat={selectChat}/>
        </>
    )
}