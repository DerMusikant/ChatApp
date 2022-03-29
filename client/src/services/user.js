import config from '../config'

const getUsers = async (username = null) => {
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