import config from '../config'
import { PromiseType } from '../types/index'

const getUsers = async ( username?: string):Promise<PromiseType | null> => {
    try {
        const response = await fetch(`${config.API}/user${ username ? `?name=${username}` : '' }`)
        const data = await response.json()
        return data
      } catch (e) {
        console.error(e)
        return null
      }
}

export { getUsers }