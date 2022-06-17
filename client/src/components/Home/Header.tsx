import { User } from '../../types/UserTypes'

import { ProfileContainer as Profile } from '../../container/ProfileContainer'

type Props = {
    user: User,
    logOut: () => void,
    handleShowProfile: () => void,
    handleCloseProfile: () => void,
    showProfile: boolean,
    showContacts: boolean
}

export const Header: React.FC<Props> = ({ user, logOut, handleShowProfile, handleCloseProfile, showContacts, showProfile }) => {


    return (
        <>

            <header className='header'>
                <div className='header--profile-button' style={{ backgroundImage: `url(${user.profilePic})` }} onClick={handleShowProfile}>
                </div>
            </header>

            <Profile user={user} logOut={logOut} handleCloseProfile={handleCloseProfile} showProfile={showProfile} />

        </>
    )
}