import createReducer from './utils'
import {
  UPDATE_UPCOMING_LAUNCHES,
  SORT_UPCOMING_LAUNCHES,
  FILTER_UPCOMING_LAUNCHES_BY_ROCKET,
  SELECT_UPCOMING_LAUNCH,
} from '../actions'
import {
  commonLaunchShape,
  defaultState,
  updateData,
  sortData,
  searchByRocket,
  selectLaunch,
} from './launchCommon'

const handlers = {
  [UPDATE_UPCOMING_LAUNCHES]: updateData,
  [SORT_UPCOMING_LAUNCHES]: sortData,
  [FILTER_UPCOMING_LAUNCHES_BY_ROCKET]: searchByRocket,
  [SELECT_UPCOMING_LAUNCH]: selectLaunch,
}

export const upcomingLaunchesShape = {
  ...commonLaunchShape,
}

export default createReducer(defaultState, handlers)
