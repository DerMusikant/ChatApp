import { Chat } from '../../types/ChatTypes'

type Props = {
    chat: Chat
}

export const ChatComponent: React.FC<Props> = ({ chat }) => {


    return (
        <>
            {chat? chat._id : 'no chat selected'}
        </>
    )
}