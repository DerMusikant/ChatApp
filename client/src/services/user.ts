import config from '../config'
import { PostPromise, Post, GetPromise, User } from '../types/UserTypes'



const getUsers = async ( username?: string):Promise<GetPromise | null> => {
    try {
        const response = await fetch(`${config.API}/user${ username ? `?name=${username}` : '' }`)
        const data = await response.json()
        return data
      } catch (e) {
        console.error(e)
        return null
      }
}

const postUser = async ( databody: Post):Promise<User | null> => {
  try {
      const response = await fetch(`${config.API}/user`, {
        method: 'POST',
        body: JSON.stringify(databody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
      const data = await response.json()

      const { error, body } = data

      if(error){
        throw error
      }

      return body
    } catch (e) {
      throw e
    }
}

export { getUsers, postUser }