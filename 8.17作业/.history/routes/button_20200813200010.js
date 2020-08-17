let btn = require('../controller/button')

module.exports = (router) => {
    router.post('/button', async btn.control)
}