import { createReducer } from '../store'
import { UPDATE_PAST_LAUNCHES, SORT_PAST_LAUNCHES } from '../actions'
import { commonLaunchShape, defaultState, updateData, sortData } from './launchCommon'

const handlers = {
  [UPDATE_PAST_LAUNCHES]: updateData,
  [SORT_PAST_LAUNCHES]: sortData,
}

export const pastLaunchesShape = {
  ...commonLaunchShape,
}

export default createReducer(defaultState, handlers)
