async function control() {
    initConnection()
    const { Schema } = mongoose

    const studentSchema = new Schema({
        name: String,
        password: String
    })
    const usersModel = mongoose.model('users', usersSchema)
}
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
module.exports = {
    control
}