

module.exports = (router) => {
  router.get('/welcome', async function (ctx, next) {
    await ctx.render('index')
  })

  btn(router)
}


