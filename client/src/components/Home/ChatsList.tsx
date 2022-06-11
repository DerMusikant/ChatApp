
import { ChatsListItem } from './ChatsListItem'

import { Chat } from '../../types/ChatTypes'

type Props = {
    chats: Chat[],
    selectChat: (chatInfo: string) => void
}

export const ChatsList: React.FC<Props> = ({ chats, selectChat }) => {

    return (
        <>
            <div>
                {chats.map((chat) => {
                    return <ChatsListItem key={chat._id} chat={chat} select={selectChat} />
                })}
            </div>
        </>
    )
}