import PropTypes from 'prop-types'
import { createReducer } from '../store'
import { UPDATE_UPCOMING_LAUNCHES } from '../actions'

const updateData = (state, { data }) => ({
  ...state,
  data,
})

const handlers = {
  [UPDATE_UPCOMING_LAUNCHES]: updateData,
}

const defaultState = {
  data: [],
}

export const launchesState = {
  data: PropTypes.array,
}

export default createReducer(defaultState, handlers)
