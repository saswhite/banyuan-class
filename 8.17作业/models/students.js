const mongoose = require('mongoose')
const { Schema } = mongoose
const studentSchema = new Schema({
    name: String,
    gender: String,
    age: Number,
    major: String,
    createAt: { type: Date, default: new Date() }
})

const studentsModel = mongoose.model('students', studentSchema)

module.exports = {
    studentsModel
}