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

const postUser = async ( {name, description, twitter, file}: Post):Promise<User | null> => {
  try {

      let formData = new FormData()

      formData.append('name', name)

      formData.append('file', file)

      formData.append('description', description)

      formData.append('twitter', twitter)


      const response = await fetch(`${config.API}/user`, {
        method: 'POST',
        body: formData
    })
      const data = await response.json()

      console.log(data)

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