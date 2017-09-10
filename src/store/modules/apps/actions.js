import {
  SET_APPS,
  SET_APPS_ERROR,
  SET_CURRENT_APP
} from '@/store/mutation-types'

import apps from '@/services/apps'

export const list = ({commit}, search) => {
  apps.list({})
  .then((result) => {
    commit(SET_APPS, result)
  })
  .catch((error) => {
    commit(SET_APPS_ERROR, error)
  })
}

export const setCurrentApp = ({commit}, appId) => {
  commit(SET_CURRENT_APP, appId)
}
