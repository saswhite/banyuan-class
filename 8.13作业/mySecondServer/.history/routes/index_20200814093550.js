const btn = require('./button')

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    console.log(a)
  }
    await ctx.render('index')
  })

let a = btn(router)



