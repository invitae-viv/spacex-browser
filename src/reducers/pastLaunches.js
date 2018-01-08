import createReducer from './utils'
import { UPDATE_PAST_LAUNCHES, SORT_PAST_LAUNCHES, FILTER_LAUNCHES_BY_ROCKET } from '../actions'
import {
  commonLaunchShape,
  defaultState,
  updateData,
  sortData,
  searchByRocket,
} from './launchCommon'

const handlers = {
  [UPDATE_PAST_LAUNCHES]: updateData,
  [SORT_PAST_LAUNCHES]: sortData,
  [FILTER_LAUNCHES_BY_ROCKET]: searchByRocket,
}

export const pastLaunchesShape = {
  ...commonLaunchShape,
}

export default createReducer(defaultState, handlers)
