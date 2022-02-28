import config from '../config';

const getMessagesByChat = async (chatID) => {
    try {
        const response = await fetch(`${config.API}/message?cID=${chatID}`)
        const data = await response.json()
        return data
      } catch (e) {
        console.error(e)
        return null;
      }
}

export { getMessagesByChat }