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

    const studentModel = new studentsModel(data)
    await studentModel.save()

    let table = await studentsModel.find({})
    ctx.state = {
        table
    }
    ctx.response.body = ctx.state

}

module.exports = {
    control
}