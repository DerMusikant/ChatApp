import { Message} from '../../types/MessageTypes'

type Props = {
    user: string,
    message: Message
}



export const ChatMessage: React.FC<Props> = ({message, user}) => {

    const myMessage: boolean = user == message.user._id

    const date = new Date(message.date)

    return (
        <div className='chat-message' style={{backgroundColor: myMessage ? '#d9fdd3' : 'white', alignSelf: myMessage ? 'end' : 'start'}}>
            <p>{message.message}</p>
            <span>{date.getDate() + '/' + date.getMonth() + '-' + date.getHours()+':'+date.getMinutes()}</span>
        </div>
    )
}