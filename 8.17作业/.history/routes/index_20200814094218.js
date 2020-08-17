const btn = require('./button')

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      students
    }
    await ctx.render('index')
  })

  btn(router)
}


