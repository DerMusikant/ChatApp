import { Chat } from '../../types/ChatTypes'
import { User } from '../../types/UserTypes'
import { Message } from '../../types/MessageTypes'

import { ChatHeaderContainer as Header } from '../../container/ChatHeaderContainer'
import { ChatBodyContainer as Body } from '../../container/ChatBodyContainer'
import { ChatFooterContainer as Footer } from '../../container/ChatFooterContainer'

type Props = {
    chat: Chat,
    user: User,
    messages: Message[],
    loading: boolean
}

export const ChatComponent: React.FC<Props> = ({ chat, user, messages, loading }) => {

    return (
        <>
            <div className='chat'>
                <Header chat={chat} userID={user._id} />
                <Body loading={loading} messages={messages} user={user}/>
                < Footer chat={chat._id} user={user._id}/>
            </div>
        </>
    )
}