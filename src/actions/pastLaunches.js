/* eslint-disable camelcase */
import { performGet, PAST } from '../api'
import {
  UPDATE_PAST_LAUNCHES,
  SORT_PAST_LAUNCHES,
  FILTER_PAST_LAUNCHES_BY_ROCKET,
  SELECT_PAST_LAUNCH,
} from './'

const apiGet = performGet(`${PAST}/`)

const launchesUpdated = data => ({
  type: UPDATE_PAST_LAUNCHES,
  data,
})

export const updateLaunches = () => (dispatch) => {
  apiGet().then(data => dispatch(launchesUpdated(data)))
}

export const sortLaunches = sortBy => ({
  type: SORT_PAST_LAUNCHES,
  sortBy,
})

export const filterByYear = launch_year => (dispatch) => {
  // launch_year will be -1 if intent is 'ANY' -- pass empty string to api
  apiGet({ launch_year: launch_year === -1 ? '' : launch_year }).then(data =>
    dispatch(launchesUpdated(data)))
}

export const filterByRocket = rocketFilter => ({
  type: FILTER_PAST_LAUNCHES_BY_ROCKET,
  rocketFilter,
})

export const selectLaunch = selectedId => ({
  type: SELECT_PAST_LAUNCH,
  selectedId,
})
