let btn = require('../controller/button')

module.exports = (router) => {
    router.get('/button', btn.addlogin)
    router.post('/button', btn.control)
}