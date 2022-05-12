import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        data: [],
    },
    mutations: {
        increment(state) {
            state.count++
        },
        addData(state, payload) {
            const { data } = state
            const newData = [...data, payload]
            state.data = newData
        }
    }
})

export default store