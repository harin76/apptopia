import {
  SET_CURRENT_MODEL
} from '@/store/mutation-types'

const mutations = {
  [SET_CURRENT_MODEL]: (state, model) => {
    state.currentModel = model
  }
}

export default mutations
