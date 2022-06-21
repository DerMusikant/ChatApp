import { User } from '../../types/UserTypes'

type Props = {
    friend: User
}



export const ChatHeader: React.FC<Props> = ({ friend }) => {


    return (
        <header className='chat-header'>
            <div className='contact--profile-pic chat-pic' style={{backgroundImage: `url(${friend.profilePic})`}} />
            <h3>Chat with {friend.name}</h3>
        </header>
    )
}