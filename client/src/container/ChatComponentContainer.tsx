import { useEffect, useState } from 'react'
import io from 'socket.io-client'

import { Chat } from '../types/ChatTypes'
import { User } from '../types/UserTypes'
import { Message } from '../types/MessageTypes'

import { getMessagesByChat } from '../services/message'

import { ChatComponent } from '../components/Home/ChatComponent'

type Props = {
    chat: Chat,
    user: User
}

export const ChatComponentContainer: React.FC<Props> = ({ chat, user }) => {

    const [messages, setMessages] = useState<Message[]>([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const socket = io('http://localhost:3000')
        socket.on('message', (newMessage) => {

            setMessages(
                (prevMessages) => [
                    ...prevMessages,
                    {
                        ...newMessage,
                        user: {
                            _id: newMessage.user
                        }
                    }
                ]
            )
        })
    }, [user._id]);

    useEffect(() => {
        setLoading(true)
        async function getMessagesByChatAsync() {
            try {
                const data = await getMessagesByChat(chat._id);
                if (!data) return;

                const { error, body } = data;
                if (error) {
                    setError('Error fetching Messages');
                    return;
                }

                setLoading(false)
                setMessages(body);
            } catch (e) {
                setError('Error fetching Messages');
            }
        }

        getMessagesByChatAsync();
    }, [chat._id])

    useEffect(()=>{

        let el = document.querySelector('.chat-body')

        if (el) el.scrollTop = el.scrollHeight

    }, [messages])

    return (
        <>{error && <div>error</div>}
            <ChatComponent loading={loading} chat={chat} user={user} messages={messages} />
        </>
    );
};

