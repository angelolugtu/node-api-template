const Koa = require('koa')
const routes = require('./routes')
const http = require('http')
const config = require('./app.config')
const app = new Koa()

app.use(routes.routes())

const server = http.createServer(app.callback())

server.listen(config.port)