import config from '../config';

const getChatsByUser = async (userId) => {
    try {
        const response = await fetch(`${config.API}/chat?uID=${userId}`)
        const data = await response.json()
        return data
      } catch (e) {
        console.error(e)
        return null;
      }
}

export { getChatsByUser }