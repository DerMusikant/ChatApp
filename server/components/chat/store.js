const Model = require('./model')


// Actual code

const addChat = (info) => {
  const newChat = new Model(info)
  newChat.save()
}

const getChats = (filterChat) => {
  return new Promise( (resolve, reject) => {
    let filter = {}
    if(filterChat){
      filter.users =  filterChat
    }
        Model.find(filter)
        .populate('users')
        .exec((error, populated) => {
            if (error) {
              reject(error)
              return null
            }
            resolve(populated)
          })
    }
  )
}


const updateChatName = async (id, name) => {
  const foundChat = await Model.findOne({
      _id: id
  })

  foundChat.name = name;

  const newChat = await foundChat.save();
  return newChat;
}

const deleteChat = (id) => {
  return Model.deleteOne({
    _id: id
  })
}

module.exports = {
  add: addChat,
  get: getChats,
  update: updateChatName,
  delete: deleteChat
}
