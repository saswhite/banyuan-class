const controller = require('../controller/users')

module.exports = (router) => {
  router.get('/users', controller.init)
  router.post('/users/checkName')
}
