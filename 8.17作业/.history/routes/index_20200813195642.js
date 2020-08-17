const btn = require('./button')
const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors')
app.use(cors({ credentials: true }))
module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    await ctx.render('index')
  })

  btn(router)
}


