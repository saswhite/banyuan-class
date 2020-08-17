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
function control() {
    return async (ctx, next) => {
        const { name, age, gender, major } = ctx.request.body

        // let data = {
        //     name,
        //     gender,
        //     age,
        //     major
        // }
        // const { Schema } = mongoose

        // const studentSchema = new Schema({
        //     'name': String,
        //     'gender': String,
        //     'age': Number,
        //     'major': String
        // })
        // const studentsModel = mongoose.model('students', studentSchema)
        // const studentModel = new studentsModel({ data })
        // await studentModel.save()
        ctx.response.body = {
            status: 'success'
        }
    }
}

// async function control(ctx, next) {
//     // return async (ctx, next) => {
//     const { name, age, gender, major } = ctx.request.body

//     let data = {
//         name,
//         gender,
//         age,
//         major
//     }
//     const { Schema } = mongoose

//     const studentSchema = new Schema({
//         'name': String,
//         'gender': String,
//         'age': Number,
//         'major': String
//     })
//     const studentsModel = mongoose.model('students', studentSchema)
//     const studentModel = new studentsModel({ data })
//     await studentModel.save()
//     ctx.response.body = {
//         status: 'success'
//     }
//     // }
// }


// initConnection()
module.exports = {
    control
}