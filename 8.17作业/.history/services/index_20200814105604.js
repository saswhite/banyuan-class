const { insertOne } = require('../models/students/students')

async function addStudent(data) {
  await insertOne(data)
}

module.exports = {
  addStudent
}
