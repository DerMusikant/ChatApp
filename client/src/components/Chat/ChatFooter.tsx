
import { useInputValue } from '../../hooks/useInputValue'

type Props = {
    loading: boolean,
    post: (msg: string) => void
}

export const ChatFooter: React.FC<Props> = ({loading, post}) => {

    const message = useInputValue('')

    const handleClick = () => {
        post(message.value)

        document.querySelector('.chat-footer-text').value=''
    }


    return (
        <div className='chat-footer'>
            <input className='chat-footer-text' type='text' disabled={loading} onChange={message.onChange} />
            <input className='chat-footer-button' type='button' value='Send' disabled={loading} onClick={handleClick} />
        </div>
    )
}