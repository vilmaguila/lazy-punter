import mutations from './mutations.js'
import actions from './actions.js'
import getters from './actions.js'

export default {
  state() {
    return {
      userId: 'dummy'
    }
  },
  mutations,
  actions,
  getters,
}