import {
  SET_CURRENT_MODEL
} from '@/store/mutation-types'

export const setCurrentModel = ({commit}, model) => {
  commit(SET_CURRENT_MODEL, model)
}
