import { useContext, useState } from 'react'
import { Context } from '../Context'

import Home from '../components/Home/Home'

import { Chat } from '../types/ChatTypes'


export const HomeContainer: React.FC = () => {
    
    const context = useContext(Context)

    const [chat, setChat] = useState<Chat>(null)

    const handleChatSelection = (chatInfo: Chat) => {
        setChat(chatInfo)
    }

    return (
        <>
            <Home user={context.user} logOut={context.removeAuth} chat={chat} selectChat={handleChatSelection}/>
        </>
    )
}