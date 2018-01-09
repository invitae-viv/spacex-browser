/* eslint-disable camelcase */
import { performGet, PAST } from '../api'
import {
  UPDATE_PAST_LAUNCHES,
  SORT_PAST_LAUNCHES,
  FILTER_PAST_LAUNCHES_BY_YEAR,
  FILTER_PAST_LAUNCHES_BY_ROCKET,
  SELECT_PAST_LAUNCH,
} from './'

const apiGet = performGet(`${PAST}/`)

const launchesUpdated = data => ({
  type: UPDATE_PAST_LAUNCHES,
  data,
})

export const sortLaunches = sortBy => ({
  type: SORT_PAST_LAUNCHES,
  sortBy,
})

export const filterByYear = yearFilter => (dispatch) => {
  // yearFilter will be -1 if intent is 'ANY' -- pass empty string to api
  apiGet({ launch_year: yearFilter === -1 ? '' : yearFilter }).then(data =>
    dispatch(launchesUpdated(data)))

  dispatch({ type: FILTER_PAST_LAUNCHES_BY_YEAR, yearFilter })
}

export const filterByRocket = rocketFilter => ({
  type: FILTER_PAST_LAUNCHES_BY_ROCKET,
  rocketFilter,
})

export const selectLaunch = selectedId => ({
  type: SELECT_PAST_LAUNCH,
  selectedId,
})
