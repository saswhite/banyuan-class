const login = {
    namespaced: true,
    state: {
        list: {
            name: '',
            age: 0,
            nickName: '',
            school: ''
        }
    },
    mutations: {
        push(state, data) {
            console.log(data.list)
            state.list.name = data.list.name
            state.list.age = data.list.age
            state.list.nickName = data.list.nickName
            state.list.school = data.list.school
        }
    }
}

export default login