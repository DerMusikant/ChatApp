import { useEffect, useState } from 'react'

import { ChatsList } from '../components/Home/ChatsList'

import { getChatsByUserID as getChats } from '../services/chat'


import { Chat } from '../types/ChatTypes'

interface Props {
  userID: string,
  selectChat: (chatInfo: string) => void
}

export const ChatsListContainer: React.FC<Props> = ({ userID, selectChat }) => {

  const [chats, setChats] = useState<Chat[]>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    // Calls fetching chat function and sets its value on 'chats', if no chat, sets loading/error
    async function getChatsAsync() {
      try {
        const data = await getChats(userID)
        if (!data) return

        const { error, body } = data

        if (error) {
          setLoading(false)
          setError(error)
          return
        }
        setChats(body)
        setLoading(false)
      } catch (e) {
        setError('Error fetching chats')
      }
    }
    getChatsAsync()
    document.addEventListener('ChatsPosted', getChatsAsync)

    return () => {
      document.removeEventListener('ChatsPosted', getChatsAsync)
    }

  }, []);


  return (
    <>
      {error && console.log(error)}
      {!loading && chats &&
        <ChatsList chats={chats} selectChat={selectChat} />}
    </>
  );
};

