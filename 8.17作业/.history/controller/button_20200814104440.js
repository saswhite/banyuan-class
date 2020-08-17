const mongoose = require('mongoose')
const services = require('../services/index')
const connection = require('../models/connection/index')


connection.initConnection()
const { Schema } = mongoose
const studentSchema = new Schema({
    'name': String,
    'gender': String,
    'age': Number,
    'major': String
})

const studentsModel = mongoose.model('students', studentSchema)

async function control(ctx, next) {
    const { name, age, gender, major } = ctx.request.body
    let data = {
        name,
        gender,
        age,
        major
    }

    const studentModel = new studentsModel(data)
    await studentModel.save()

    let table =

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

    ctx.response.body
}

module.exports = {
    addLogin,
    control
}