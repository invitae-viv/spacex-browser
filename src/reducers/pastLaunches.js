import createReducer from './utils'
import {
  UPDATE_PAST_LAUNCHES,
  SORT_PAST_LAUNCHES,
  FILTER_PAST_LAUNCHES_BY_ROCKET,
  SELECT_PAST_LAUNCH,
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
  [UPDATE_PAST_LAUNCHES]: updateData,
  [SORT_PAST_LAUNCHES]: sortData,
  [FILTER_PAST_LAUNCHES_BY_ROCKET]: searchByRocket,
  [SELECT_PAST_LAUNCH]: selectLaunch,
}

export const pastLaunchesShape = {
  ...commonLaunchShape,
}

export default createReducer(defaultState, handlers)
