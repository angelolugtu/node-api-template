const Router = require('koa-router')
const appVersion = require('../package.json').version

const router = new Router()
const api = new Router()

router.get('/', async (ctx, next) => {
    ctx.body = 'Sample Node API template'
})

router.use('/api', api.routes())

module.exports = router