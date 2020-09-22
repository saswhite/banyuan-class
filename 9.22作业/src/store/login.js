import * as type from "./mutation-type"

const login = {
    namespaced: true,
    state: {
        list: JSON.parse(localStorage.getItem('user'))
    },
    mutations: {
        [type.PUSH_LIST](state, data) {
            state.list = data;
            localStorage.setItem('user', JSON.stringify(data))
        }
    },
    actions: {
        pushListState({ commit }, data) {
            commit(type.PUSH_LIST, data)
        }
    }
};

export default login;
