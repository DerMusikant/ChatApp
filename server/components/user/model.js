const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    name: String,
    description: String,
    twitter: String,
    profilePic: String
},
{
    versionKey: false //Remueve la llave __v
})

const model = mongoose.model('User', mySchema)

module.exports = model
