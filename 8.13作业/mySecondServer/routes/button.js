let btn = require('../controller/button')

module.exports = (router) => {
    router.get('/button', btn.addLogin)
    router.post('/button', btn.addStudent)
}