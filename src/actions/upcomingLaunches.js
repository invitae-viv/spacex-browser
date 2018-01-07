/* eslint-disable camelcase */
import { performGet, UPCOMING } from '../api'
import { UPDATE_UPCOMING_LAUNCHES, SORT_UPCOMING_LAUNCHES, FILTER_LAUNCHES_BY_ROCKET } from './'

const apiGet = performGet(`${UPCOMING}/`)

const launchesUpdated = data => ({
  type: UPDATE_UPCOMING_LAUNCHES,
  data,
})

export const updateLaunches = () => (dispatch) => {
  apiGet().then(data => dispatch(launchesUpdated(data)))
}

export const sortLaunches = sortBy => ({
  type: SORT_UPCOMING_LAUNCHES,
  sortBy,
})

export const filterByYear = launch_year => (dispatch) => {
  apiGet({ launch_year }).then(data => dispatch(launchesUpdated(data)))
}

export const filterByRocket = rocketFilter => ({
  type: FILTER_LAUNCHES_BY_ROCKET,
  rocketFilter,
})
