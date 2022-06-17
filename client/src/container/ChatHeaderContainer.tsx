import { Chat } from '../types/ChatTypes'
import { User } from '../types/UserTypes'

import {ChatHeader } from '../components/Chat/ChatHeader'

type Props = {
    chat: Chat,
    userID: string
}



export const ChatHeaderContainer: React.FC<Props> = ({ chat, userID }) => {

    const friend: User = chat.users.filter((chatUser) => chatUser._id != userID)[0]


    return (
        <ChatHeader friend={friend} />
    )
}