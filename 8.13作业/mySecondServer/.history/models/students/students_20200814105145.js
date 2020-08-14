const { studentsModel } = require('../models/students')
const studentModel = new studentsModel(data)
await studentModel.save()