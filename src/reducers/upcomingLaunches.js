import { createReducer } from '../store'
import { UPDATE_UPCOMING_LAUNCHES, SORT_UPCOMING_LAUNCHES } from '../actions'
import { commonLaunchShape, defaultState, updateData, sortData } from './launchCommon'

const handlers = {
  [UPDATE_UPCOMING_LAUNCHES]: updateData,
  [SORT_UPCOMING_LAUNCHES]: sortData,
}

export const upcomingLaunchesShape = {
  ...commonLaunchShape,
}

export default createReducer({ ...defaultState }, handlers)
