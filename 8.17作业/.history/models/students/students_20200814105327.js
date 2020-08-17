const { studentsModel } = require('../models/students')

async function insertOne(data) {
    const studentModel = new studentsModel(data)
    await studentModel.save()
}


