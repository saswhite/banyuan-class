async function control() {
    return (ctx, next) => {
        const { name, age, gender, major } = ctx.request.body;
        initConnection()
        const { Schema } = mongoose

        const studentSchema = new Schema({
            name: String,
            password: String
        })
        const studentModel = mongoose.model('students', studentSchema
    }
   )
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