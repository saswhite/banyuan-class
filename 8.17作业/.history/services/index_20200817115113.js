const moment = require('moment')
const { insertOne, find } = require('../models/students/students')

async function addStudent(data) {
  const { name } = data

  let result = { status: 'success' }

  if (name) {

    // 插入数据库
    await insertOne(data)
  } else {

    result.status = 'falied'
    result.message = '没有用户名'
  }

  return result
}

async function getStudents() {
  return await find({
    createAt: {
      $lt: moment().toDate(),
      $gt: moment().subtract(1, 'dat').toDate()
    }
  })
}

module.exports = {
  addStudent,
  getStudents
}
