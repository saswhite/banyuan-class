async function welcome(ctx, next) {
    ctx.state = {
        title: 'koa2 title'
    }
    await ctx.render('index', { title: ctx.state })
}

module.exports = {
    welcome
}