const socketIO = require('socket.io')

const socket = {}

const connect = server => {
    socket.io = socketIO(server, {cors: { origin: 'http://localhost:8080'}})
}

module.exports = {
    connect,
    socket
}