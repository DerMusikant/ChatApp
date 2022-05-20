import { useContext, useEffect, useState } from 'react'
import { Context } from '../Context'

import Home from '../components/Home/Home'


export const HomeContainer: React.FC = () => {
    
    const context = useContext(Context)

    const [chat, setChat] = useState('')

    const handleChatSelection = (chatInfo: string) => {
        setChat(chatInfo)
    }

    return (
        <>
            <Home user={context.user} logOut={context.removeAuth} chat={chat} selectChat={handleChatSelection}/>
        </>
    )
}