import { User } from '../../types/UserTypes'
import { Message } from '../../types/MessageTypes'

import { ChatMessage } from './ChatMessage'

type Props = {
    user: User,
    messages: Message[]
}



export const ChatBody: React.FC<Props> = ({ messages, user }) => {

    return (
        <div className='chat-body'>
            {
                messages.map((message, index) => <ChatMessage key={index} message={message} user={user._id}/>)
            }
        </div>
    )
}