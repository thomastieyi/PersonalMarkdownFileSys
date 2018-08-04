const router = require('koa-router')()
const Controller = require('../controller')
module.exports = app => {
  app.use(router.routes())
  router.get('/login', Controller.login) 
  .get('/register',Controller.register)
  .post('/updata',Controller.updata)
}