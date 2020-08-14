const btn = require('./button')

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    await ctx.render('index')
  })

  let a = btn(router)

}


