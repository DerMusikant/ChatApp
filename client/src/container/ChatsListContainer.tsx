import React, { useContext } from 'react'

import { getChatsByUserID as getChats } from '../services/chat'
import { Chat } from '../types/ChatTypes'

interface Props {
    userID: string
}

export const ChatsListContainer: React.FC<Props> = ( { userID } ) => {

  const [chats, setChats] = React.useState<Chat[]>([])
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(true)  

  React.useEffect(() => {

    // Calls fetching user function and sets its value on 'users', if not user, sets loading/error
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
        setLoading(false)
        setChats(body)
      } catch (e) {
        setError('Error fetching users')
      }
    }

    getChatsAsync()
  }, []);

  return (
    <>
      {error && console.log(error)}
    </>
  );
};

