const Model = require('./model')


// Actual code

const addUser = (user) => {
  const newUser = new Model(user)
  return newUser.save()
}



const getUser = filterUser => {
  return new Promise(async (resolve, reject) => {
    let filter = {}
    if(filterUser){
      filter.name = new RegExp(filterUser, 'i') /* Mongo can recieve regular expressions on searches,
                                                in this case, the flag "i" means "Case insensitive"
                                                (Which also results on a partial match finder) */
    }
    await Model.find(filter)
    .then(data => {
      if ( data[0]._id){
        resolve(data)
      }
    })
    .catch(e => {
      reject('User not found')
    })
  }
  )
}

const updateUser = async (id, name, description, twitter) => {
  const foundUser = await Model.findOne({
      _id: id
  })

  if (name) foundUser.name = name

  if (description) foundUser.description = description

  if (twitter) foundUser.twitter = twitter

  const newUser = await foundUser.save()

  return newUser;
}


const deleteUser = (id) => {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addUser,
  get: getUser,
  update: updateUser,
  delete: deleteUser
}
