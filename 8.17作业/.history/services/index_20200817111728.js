const moment = require('moment')
const { insertOne } = require('../models/students/students')

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

module.exports = {
  addStudent
}
