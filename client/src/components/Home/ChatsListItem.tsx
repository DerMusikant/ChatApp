import { Chat } from '../../types/ChatTypes'

import { User } from '../../types/UserTypes'

type Props = {
    chat: Chat,
    select: (chatInfo: Chat) => void,
    userID: string
}

export const ChatsListItem: React.FC<Props> = ({ chat, select, userID }) => {

    const handleClick = (chatID: Chat) => {
        select(chatID)
    }



    const friend = chat.users.filter((chatUser) => chatUser._id != userID)


    return (
        <>
            <div className='contact' onClick={() => handleClick(chat)}>
                <div className='contact--profile-pic' style={{ backgroundImage: `url(${friend[0].profilePic})` }}>
                </div>

                <div>
                    <p>{friend[0].name}</p>
                </div>
            </div>
        </>
    )
}