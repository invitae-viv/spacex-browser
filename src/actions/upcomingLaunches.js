/* eslint-disable camelcase */
import { performGet, UPCOMING } from '../api'
import {
  UPDATE_UPCOMING_LAUNCHES,
  SORT_UPCOMING_LAUNCHES,
  FILTER_UPCOMING_LAUNCHES_BY_YEAR,
  FILTER_UPCOMING_LAUNCHES_BY_ROCKET,
  SELECT_UPCOMING_LAUNCH,
} from './'

const apiGet = performGet(`${UPCOMING}/`)

const launchesUpdated = data => ({
  type: UPDATE_UPCOMING_LAUNCHES,
  data,
})

export const sortLaunches = sortBy => ({
  type: SORT_UPCOMING_LAUNCHES,
  sortBy,
})

export const filterByYear = yearFilter => (dispatch) => {
  // yearFilter will be -1 if intent is 'ANY' -- pass empty string to api
  apiGet({ launch_year: yearFilter === -1 ? '' : yearFilter }).then(data =>
    dispatch(launchesUpdated(data)))

  dispatch({ type: FILTER_UPCOMING_LAUNCHES_BY_YEAR, yearFilter })
}

export const filterByRocket = rocketFilter => ({
  type: FILTER_UPCOMING_LAUNCHES_BY_ROCKET,
  rocketFilter,
})

export const selectLaunch = selectedId => ({
  type: SELECT_UPCOMING_LAUNCH,
  selectedId,
})
