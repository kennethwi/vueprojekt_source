import { createStore } from 'vuex'
const mutations = {
        samla_laenklista(state, nydata) {
            state.laenklistan = nydata
        },
        increment(state, amount) {
            state.counter += amount
        }
    },
    state = {
        counter: 0,
        counter99: 0,
        someValue: 'Detta är den centrala platsen för information22',
        laenklistan: 'tomt'
    }

//export default createStore({ mutations, state });
export default createStore({ mutations, state, strict: false })
    //const store = Vuex.createStore({ mutations, state })