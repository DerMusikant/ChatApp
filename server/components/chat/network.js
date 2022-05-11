//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
multer = require('multer'),
fs = require('fs'),
response = require('../../network/response'),
controller = require('./controller')

//code

const upload = multer({
  dest: 'public/files/',
})


//Returns an array of chats (Can be filtered by uID on query)
router.get('/', (req, res) => {
  const filterUser = req.query.uID || null
    controller.getChats( filterUser )
    .then((list) => {
      response.success(req, res, list)
      })
      .catch((e) => {
        response.error(req, res, e, 'Chat getter error')
      })
})


//Posts a chat on the database (users array and name required on request body)
router.post('/',upload.single('file'), (req, res) => {

  let fileUrl = 'https://www.nicepng.com/png/detail/73-730154_open-default-profile-picture-png.png'
  let fileDestination
  if (req.file) {
    fileUrl = `${req.protocol}://${req.get('host')}/${req.file.destination}${req.file.filename}`
    fileDestination = req.file.destination + req.file.filename
  }


    controller.addChat(req.body.users, req.body.name, fileUrl, fileDestination)
    .then((data) => {
      response.success(req,res, data)
    })
    .catch((e) => {
      response.error(req, res, e, 'Chat post error', 400)
    })
})


//Modifies a chat's name (id is required as a parameter on url)
router.patch('/:id', (req, res) => {
  controller.updateChat(req.params.id, req.body.name)
      .then((data) => {
          response.success(req, res, data)
      })
      .catch(e => {
          response.error(req, res, 'Internal error', e)
      })
})




//Deletes a chat (Id required as a parameter)
router.delete('/:id', (req, res) => {
  console.log(req.body)
  if (req.body.file) fs.unlink(req.body.file, e => {if (e) console.log(e)})
  controller.deleteChat(req.params.id)
  .then((data) => {
    response.success(req,res, data)
  })
  .catch((e) => {
    response.error(req, res, e, 'Chat deleting error')
  })
})


module.exports = router
