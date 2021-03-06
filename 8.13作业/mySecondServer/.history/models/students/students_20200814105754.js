const { studentsModel } = require('../models/students')

async function insertOne(data) {
    const studentModel = new studentsModel(data)
    await studentModel.save()
}


async function find(query) {
    return studentsModel.fund(query)
}

module.exports = {
    insertOne,
    find
}


