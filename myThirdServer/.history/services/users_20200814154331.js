const { checkName: testName } = require('../common/utils')

function checkName(name) {

    let data = { flag: true }
    //正则检查
    if (testName(name)) {
        //用户名重复检查

    } else {

    }
}

module.exports = {
    checkName
}