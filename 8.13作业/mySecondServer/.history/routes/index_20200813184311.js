const btn = require('./button')

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    await ctx.render('index')
  })

  button(router)
}


