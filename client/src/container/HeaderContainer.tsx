import { User } from '../types/UserTypes'
import { useState } from 'react'

import { Header } from '../components/Home/Header'

export const HeaderContainer: React.FC<{ user: User, logOut: () => void }> = ({ user, logOut }) => {

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
            <Header user={user} logOut={logOut} {...handlers} {...states}/>
        </>
    )
}