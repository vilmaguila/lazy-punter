import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  state() {
    return {
      user: 'dummy',
      loading: true,
      error: null,
      isAuthenticated: false
    }
  },
  mutations,
  actions,
  getters,
}