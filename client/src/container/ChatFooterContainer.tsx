import { useState } from 'react'

import { ChatFooter } from '../components/Chat/ChatFooter'

import { postMessage as post } from '../services/message'

interface Props {
    chat: string,
    user: string
}

export const ChatFooterContainer: React.FC<Props> = ({ chat, user}) => {

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const postMessage = async (msg: string) => {
        setLoading(true)
        try {
            const data = await post({chat: chat, user: user, message: msg});
            if (!data) return;

            const { error, body } = data;
            if (error) {
                setError('Error posting Message')
                setLoading(false)
                return;
            }

            setLoading(false)
        } catch (e) {
            setError('Error posting message');
        }
    }

    // postMessage({chat: '62a51a2d81094bf3fa72417f', user: '62a51a2d81094bf3fa72417c', message: 'testing'})

    return (
        <>
            {error && <p>{error}</p>}
            <ChatFooter loading={loading} post={postMessage}/>
        </>

    );
};

