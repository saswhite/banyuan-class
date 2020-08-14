const user = require('./users')
const foods = require('./foods')

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    ctx.state = {
      title: 'koa2 title'
    }

    await ctx.render('index', { title: ctx.state })
  })

  router.get('/cjs', async (ctx, next) => {
    // ctx.body = 'Hello World'
    ctx.state = {
      title: 'Koa2'
    }
    await ctx.render('index', ctx.state)
  })

  user(router)
  foods(router)
}
