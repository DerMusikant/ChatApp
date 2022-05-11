//Requiring dependencies without writing const over and over again :P

const

express = require('express'),
router = express.Router(),
multer = require('multer'),
fs = require('fs'),
response = require('../../network/response'),
controller = require('./controller')


//Code

const upload = multer({
  dest: 'public/files/',
})


//Posts a message on the database (user, message and chat are needed on request body)
router.post('/',upload.single('file'), (req, res) => {

  let fileUrl
  let fileDestination
  if (req.file) {
    fileUrl = `${req.protocol}://${req.get('host')}/${req.file.destination}${req.file.filename}`
    fileDestination = req.file.destination + req.file.filename
  }

  controller.addMessage(req.body.user, req.body.message, req.body.chat, fileUrl, fileDestination)
  .then((data) => {
    response.success(req,res, data)
  })
  .catch((e) => {
    response.error(req, res, e, 'Message controller error', 400)
  })
})

//Returns an array of messages (Can be filtered by cID on query)
router.get('/', (req, res) => {
  const filterMessages = req.query.cID || null
    controller.getMessages( filterMessages )
    .then((list) => {
      response.success(req, res, list)
      })
      .catch((e) => {
        response.error(req, res, 'Internal Error', e)
      })
})




//Modifies a msg's text (id is required as a parameter on url)
router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data)
        })
        .catch(e => {
            response.error(req, res, 'Internal error', e)
        })
})

//Deletes a msg (Id required as a parameter and file if a file must be deleted)
router.delete('/:id', (req, res) => {
  if (req.body.file) fs.unlink(req.body.file, e => {if (e) console.log(e)})
  controller.deleteMessage(req.params.id)
  .then((data) => {
    response.success(req,res, data)
  })
  .catch((e) => {
    response.error(req, res, 'Internal error', e)
  })
})


module.exports = router
