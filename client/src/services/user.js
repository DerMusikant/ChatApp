import config from '../config';

const getUserByName = async (username) => {
    try {
        const response = await fetch(`${config.API}/user?name=${username}`)
        const data = await response.json()
        return data
      } catch (e) {
        console.error(e)
        return null;
      }
}

export { getUserByName }