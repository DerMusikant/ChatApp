const store = require('./store')


//Stores a new user on the database with name
const addUser = (name, description, twitter, profilePic) => {
  return new Promise((resolve, reject) => {
    if (!name){
      console.error('User/controller no [name] found')
      return reject('User controller error.')
    }
    const info = {
      name,
      description,
      twitter,
      profilePic
    }



    resolve(store.add(info))
  })
}


const getUser = (filter) => {
    return store.get(filter)
}

const updateUser = (id, name, description, twitter) => {
  return new Promise(async (resolve, reject) => {
      if (!id || (!name && !description && !twitter) ) {
          reject('Invalid data');
          return false;
      }

      const result = await store.update(id, name, description, twitter);

      resolve(result);
  })
}


const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    if(!id){
      reject('Invalid Parameter')
    }

    store.delete(id)
    .then(() => {
      resolve('User deleted succesfully')
    })
    .catch((e) => {
      reject(e)
    })
  })
}


module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser
}
