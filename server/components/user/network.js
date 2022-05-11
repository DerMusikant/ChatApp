//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
path = require('path'),
multer = require('multer'),
fs = require('fs'),
response = require('../../network/response'),
controller = require('./controller')


//Actual code


const upload = multer({
  dest: 'public/files/',
})

let defaultPic = 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'


//Posts an user on the database (body.name/description/twitter is needed on request, file is optional)
router.post('/',upload.single('file'), (req, res) => {

  //Sets a default profile pic
  let fileUrl = defaultPic

  if (req.file) {
    fileUrl = `${req.protocol}://${req.get('host')}/${req.file.destination + req.file.filename}`
    fileDestination = req.file.destination + req.file.filename
  }

    controller.addUser(req.body.name, req.body.description, req.body.twitter, fileUrl, fileDestination)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, 'Please, make sure to fill all required fields.', e, 400)
    })
})


//Gets an array of users (Can be filtered by name on query)
router.get('/', (req, res) => {
  controller.getUser(req.query.name).
  then((data) => {
    response.success(req, res, data)
  })
  .catch((e) => {
    response.error(req, res, e, 'Error getting user', 404)
  })
})


//Modifies a user's data (id is required as a parameter on url, name/description/twitter are body keys to update)
router.patch('/:id', (req, res) => {
  controller.updateUser(req.params.id, req.body.name, req.body.description, req.body.twitter)
      .then((data) => {
          response.success(req, res, data)
      })
      .catch(e => {
          response.error(req, res, 'Internal error', e)
      })
})

//Deletes a user (Id required as a parameter)
router.delete('/:id', (req, res) => {
  console.log(req.body)
  if (req.body.destination) fs.unlink(req.body.destination, e => {if (e) console.log(e)})
controller.deleteUser(req.params.id)
.then((data) => {
  response.success(req,res, data)
})
.catch((e) => {
  response.error(req, res, 'Internal error', e)
})
})

module.exports = router
