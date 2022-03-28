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

        },
        userMsg:{
            id:0,
            name:'',
            qqnum:'',
            telnum:'',
            introduction:'',
            headImg:'',
            password:''
        },
        newId:{
            id:0
        }
    },
    getters:{

    },
    mutations: {
        activedId(state, paramsObj) {
            state.info.id = paramsObj.id
            state.info.index = paramsObj.index
        },
        saveUserMsg(state,userMsg){
            state.userMsg.id = userMsg.id
            state.userMsg.name = userMsg.name
            state.userMsg.qqnum = userMsg.qqnum
            state.userMsg.telnum = userMsg.telnum
            state.userMsg.introduction = userMsg.introduction
            state.userMsg.headImg = userMsg.headImg
            state.userMsg.password = userMsg.password
        },
        saveNewId(state,newId){
            state.newId.id = newId
        }
    },
    actions: {

    }
})