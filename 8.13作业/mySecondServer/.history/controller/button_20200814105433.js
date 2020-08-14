
const services = require('../services/index')
const connection = require('../models/connection/index')

connection.initConnection()

async function control(ctx, next) {
    const { name, age, gender, major } = ctx.request.body
    let data = {
        name,
        gender,
        age,
        major
    }



    ctx.response.body = {
        status: 'success'
    }

}

async function addLogin(ctx, next) {
    let students = await studentsModel.find({})
    ctx.state = {
        students
    }
    await ctx.render('index', ctx.state)
}

async function addStudent(ctx, next) {
    const data = ctx.request.body
    await services.addStudent(data)

    ctx.response.body = {}
}

module.exports = {
    addStudent,
    control
}