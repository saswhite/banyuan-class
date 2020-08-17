const user = require('./users')
const foods = require('./foods')

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    await ctx.render('index')
  })

  user(router)
  foods(router)
}
