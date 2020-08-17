const services = require('../services/users')

async function init(ctx, next) {
    await ctx.render('users')
}

async function checkName(ctx, next) {
    const { name } = ctx.request.body
    let data = await services.checkName(name)

    ctx.response.body = data
}

module.exports = {
    init,
    checkName
}