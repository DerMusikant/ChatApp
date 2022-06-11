import config from '../config';

import { Post, Chat, GetPromise } from '../types/ChatTypes'

// const getChatsByUser = async (userId) => {
//     try {
//         const response = await fetch(`${config.API}/chat?uID=${userId}`)
//         const data = await response.json()
//         return data
//       } catch (e) {
//         console.error(e)
//         return null;
//       }
// }


const postChat = async ({ name, users }: Post): Promise<Chat | null> => {
  try {

    let formData = new FormData()

    formData.append('name', name)

    users.forEach((value, index) => {
      formData.append(`users[${index}]`, value)
    })



    const response = await fetch(`${config.API}/chat`, {
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


const getChatsByUserID = async (userID: string): Promise<GetPromise | null> => {
  try {
    const response = await fetch(`${config.API}/chat?uID=${userID}`)
    const data = await response.json()
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

export { postChat, getChatsByUserID }