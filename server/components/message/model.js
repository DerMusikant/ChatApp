const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  chat: {
    type: Schema.ObjectId,
    ref: 'Chat'
  },
  message: String,
  pic: String,
  fileDestination: String,
  date: Date
},
{
    versionKey: false //Remueve la llave __v
})

const model = mongoose.model('Message', mySchema)

module.exports = model
