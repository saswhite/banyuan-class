
const services = require('../services/index')
const connection = require('../models/connection/index')
const { find } = require('../models/students/students')
const _ = require('lodash')

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
    _.map(students, (item) => {
        if (item.gender == '1') {
            item.gender = '男'
        } else {
            item.gender = '女'
        }
    })
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
async function select(ctx, next) {
    const { gender } = await 
}
module.exports = {
    addLogin,
    addStudent,
    select
}




