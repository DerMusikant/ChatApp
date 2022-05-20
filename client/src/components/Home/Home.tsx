import {User} from '../../types/UserTypes'

import { HeaderContainer as Header } from '../../container/HeaderContainer'
import { LeftSide } from './LeftSide'

type Props = {
    user: User,
    logOut: () => void,
    chat: string,
    selectChat: (chatInfo: string) => void
}


const Home: React.FC<Props> = ({user, logOut, chat, selectChat}) => {

    return (
        <div className='home'>
            <LeftSide>
                <Header user={user} logOut={logOut} selectChat={selectChat}/>
            </LeftSide>
            <div>
                {chat}
            </div>

        </div>
    )
}

export default Home