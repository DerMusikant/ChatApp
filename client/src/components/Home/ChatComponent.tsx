import { Chat } from '../../types/ChatTypes'
import { User } from '../../types/UserTypes'

import { ChatHeaderContainer as Header } from '../../container/ChatHeaderContainer'

type Props = {
    chat: Chat,
    user: User
}

export const ChatComponent: React.FC<Props> = ({ chat, user }) => {



    return (
        <>
            {
                chat ?
                    <div className='chat'>
                        <Header chat={chat} userID={user._id} />
                    </div>
                    :
                    'no chat selected'}
        </>
    )
}