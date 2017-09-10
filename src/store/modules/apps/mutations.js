import {
  SET_APPS,
  SET_CURRENT_APP,
  SET_APPS_ERROR
} from '@/store/mutation-types'

const mutations = {
  [SET_APPS]: (state, apps) => {
    state.apps = apps
    state.error = null
  },
  [SET_CURRENT_APP]: (state, appId) => {
    state.currentApp = state.apps.find((app) => app._id === appId)
  },
  [SET_APPS_ERROR]: (state, error) => {
    state.error = error
  }
}

export default mutations
