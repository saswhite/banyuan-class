
const services = require('../services/index')
const connection = require('../models/connection/index')
const { studentsModel } = require('../models/students')
const { students } = require('../models/students/students')

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
    let students = await services.getStudents()
    console.log(students)
    ctx.state = {
        students
    }
    await ctx.render('index', ctx.state)
}

async function addStudent(ctx, next) {
    const data = ctx.request.body
    let result = await services.addStudent(data)
    result.students = await services.getStudents()
    ctx.response.body = result
}

module.exports = {
    addLogin,
    addStudent
}