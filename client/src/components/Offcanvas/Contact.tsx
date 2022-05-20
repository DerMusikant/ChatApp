import { User } from '../../types/UserTypes'

type Props = {
    user: User,
    handleCloseContacts: () => void,
    selectChat: (chatInfo: string) => void
}

export const Contact: React.FC<Props> = ({ user, handleCloseContacts, selectChat }) => {

    const handleClick = (userID: string) => {
        selectChat(userID)
        handleCloseContacts()
    }


    return (
        <>
            <div className='contact' onClick={() => handleClick(user._id)}>
                <img src={user.profilePic} alt={`${user.name}'s profile picture`} />
                <div>
                    <p>{user.name}</p>
                    <p>{user.description}</p>
                </div>
            </div>
        </>
    )
}