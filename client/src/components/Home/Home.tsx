import { User } from '../../types/UserTypes'
import { Chat } from '../../types/ChatTypes'


import { HeaderContainer as Header } from '../../container/HeaderContainer'
import { ChatsListContainer as ChatsList } from '../../container/ChatsListContainer'
import { ChatComponent } from './ChatComponent'


type Props = {
    user: User,
    logOut: () => void,
    chat: Chat,
    selectChat: (chatInfo: Chat) => void
}


const Home: React.FC<Props> = ({ user, logOut, chat, selectChat }) => {

    return (
        <div className='home'>
            <div className='home--left-side'>
                <Header user={user} logOut={logOut} />
                <ChatsList userID={user._id} selectChat={selectChat} />
            </div>
            <main>
                < ChatComponent chat={chat} />
            </main>

        </div>
    )
}

export default Home