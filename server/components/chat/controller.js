const store = require('./store')


//Stores message on the database with extra info (Date, etc)
const addChat = (users, name, chatPic, fileDestination) => {
  return new Promise((resolve, reject) => {
    if (!users || !name || !Array.isArray(users)){
      console.error('Chat/controller no [users/name] found')
      return reject('Data error.')
    }
    const info = {
      name,
      users,
      chatPic
    }

    if (fileDestination) info.fileDestination = fileDestination

    store.add(info)
    resolve(info)
  })
}



const getChats = ( filterUser ) => {
  return new Promise((resolve, reject) => {
    resolve(store.get(filterUser))
  })
}


const updateChat = (id, name) => {
  return new Promise(async (resolve, reject) => {
      if (!id || !name) {
          reject('Invalid data');
          return false;
      }

      const result = await store.update(id, name);

      resolve(result);
  })
}


const deleteChat = (id) => {
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Invalid Parameter')
    }

    store.delete(id)
    .then(() => {
      resolve('Chat deleted succesfully')
    })
    .catch((e) => {
      reject(e)
    })
  })
}


module.exports = {
  addChat,
  getChats,
  updateChat,
  deleteChat
}
