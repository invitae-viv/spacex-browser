import { createReducer } from '../store'
import {
  UPDATE_UPCOMING_LAUNCHES,
  SORT_UPCOMING_LAUNCHES,
  FILTER_LAUNCHES_BY_ROCKET,
} from '../actions'
import {
  commonLaunchShape,
  defaultState,
  updateData,
  sortData,
  searchByRocket,
} from './launchCommon'

const handlers = {
  [UPDATE_UPCOMING_LAUNCHES]: updateData,
  [SORT_UPCOMING_LAUNCHES]: sortData,
  [FILTER_LAUNCHES_BY_ROCKET]: searchByRocket,
}

export const upcomingLaunchesShape = {
  ...commonLaunchShape,
}

export default createReducer({ ...defaultState }, handlers)
