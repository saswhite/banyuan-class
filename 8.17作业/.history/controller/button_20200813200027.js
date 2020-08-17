
function control() {
    return async (ctx, next) => {
        const { name, age, gender, major } = ctx.request.body
        initConnection()
        let data = {
            name,
            gender,
            age,
            major
        }
        const { Schema } = mongoose

        const studentSchema = new Schema({
            'name': String,
            'gender': String,
            'age': Number,
            'major': String
        })
        const studentsModel = mongoose.model('students', studentSchema)
        const studentModel = new studentsModel({ data })
        await studentModel.save()
    }
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