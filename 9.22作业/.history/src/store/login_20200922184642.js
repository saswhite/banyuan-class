const login = {
    namespaced: true,
    state: {
        list: {}
    },
    mutations: {
        push(state, data) {
            console.log(data.list);
            state.list = data.list;
        }
    }
};

export default login;
