import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        info: {
            id: 0,
            index: 0
        },
        user: {

        }
    },
    getters:{

    },
    mutations: {
        activedId(state, paramsObj) {
            state.info.id = paramsObj.id
            state.info.index = paramsObj.index
        }
    },
    actions: {

    }
})