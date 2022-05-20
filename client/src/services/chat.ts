import config from '../config';

import { GetPromise } from '../types/ChatTypes'

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

const getChatsByUserID = async ( userID: string):Promise<GetPromise | null> => {
  try {
      const response = await fetch(`${config.API}/chat?uID=${userID}`)
      const data = await response.json()
      return data
    } catch (e) {
      console.error(e)
      return null
    }
}

export { getChatsByUserID }