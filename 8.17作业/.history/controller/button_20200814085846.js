const mongoose = require('mongoose')
async function initConnection() {
    await mongoose.connect('mongodb://localhost/local', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if (error) {
            console.log(error)
        }
        console.log('连接成功')
    })
}
initConnection()
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

    console.log(data)

    const studentModel = new studentsModel(data)
    await studentModel.save()

    let table = studentsModel.find({})
    console.log(table)
    ctx.response.body = {
        table
    }
}

module.exports = {
    control
}