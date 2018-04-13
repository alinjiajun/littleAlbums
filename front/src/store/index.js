import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        addDirCount: 0,
        addIMgCount: 0
    },
    mutations: {
        changeAddDirCount(state, playload) {
            state.addDirCount += 1;
        },
        changeAddIMgCount(state, playload) {
            state.addIMgCount += 1;
        }
    }
})

export default store