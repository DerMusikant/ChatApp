import config from '../config'

import { PostPromise, Post } from '../types/MessageTypes'

const getMessagesByChat = async (chatID: string) => {
    try {
        const response = await fetch(`${config.API}/message?cID=${chatID}`)
        const data = await response.json()
        return data
      } catch (e) {
        console.error(e)
        return null;
      }
}

  const postMessage = async ({ user, chat, message}: Post): Promise<PostPromise | null> => {
  try {

    let formData = new FormData()

    formData.append('user', user)

    formData.append('chat', chat) 

    formData.append('message', message)



    const response = await fetch(`${config.API}/message`, {
      method: 'POST',
      body: formData
    })
    
    const data = await response.json()

    const { error, body } = data

    if (error) {
      throw error
    }

    return body
  } catch (e) {
    throw e
  }
}

export { getMessagesByChat, postMessage }