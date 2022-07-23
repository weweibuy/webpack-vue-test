import {createStore} from "vuex";

const INPUT_VALUE = "INPUT_VALUE"

const store = {
    state: {
        inputValue: "123"
    },
    mutations: {
        [INPUT_VALUE](state, data){
            state.inputValue  = data
        }
    },
    actions: {
        setInputValue({commit}, data){
            commit(INPUT_VALUE, data)
        }
    },
    getters: {
        getInputValue:state=> state.inputValue
    },
    modules: {},
}

export default createStore(store)