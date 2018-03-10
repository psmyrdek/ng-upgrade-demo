const http = require('http')

const app = require('./server-app/server')

const server = http.createServer(app)
server.listen(3000)