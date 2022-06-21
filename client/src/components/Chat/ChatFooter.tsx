
import { useInputValue } from '../../hooks/useInputValue'

type Props = {
    loading: boolean,
    post: (msg: string) => void
}

export const ChatFooter: React.FC<Props> = ({loading, post}) => {

    const text = document.getElementById('footer')

    const message = useInputValue('')

    const handleClick = (e) => {

        e.preventDefault()


        post(message.value)

        text.value = ''


    }


    return (
        <form className='chat-footer'  onSubmit={handleClick}>
            <input id='footer' className='chat-footer-text' type='text' disabled={loading} onChange={message.onChange} />
            <input className='chat-footer-button' type='submit' value='Send' disabled={loading} />
        </form>
    )
}