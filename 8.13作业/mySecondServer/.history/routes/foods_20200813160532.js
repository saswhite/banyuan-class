module.exports = (router) => {
    router.get('/foods', async function (ctx, next) {
        ctx.body = 'this a users response!'
    })
}
