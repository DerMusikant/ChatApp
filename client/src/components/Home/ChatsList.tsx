
import { ChatsListItem } from './ChatsListItem'

import { Chat } from '../../types/ChatTypes'

type Props = {
    chats: Chat[],
    selectChat: (chatInfo: Chat) => void,
    userID: string
}

export const ChatsList: React.FC<Props> = ({ chats, selectChat, userID }) => {

    return (
        <div className='chats-list'>
            {chats.map((chat) => {
                return <ChatsListItem key={chat._id} chat={chat} select={selectChat} userID={userID}/>
            })}
        </div>
    )
}