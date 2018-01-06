import { PAST } from '../api'
import { UPDATE_PAST_LAUNCHES, SORT_PAST_LAUNCHES } from './'

const launchesUpdated = data => ({
  type: UPDATE_PAST_LAUNCHES,
  data,
})

export const updateLaunches = () => (dispatch) => {
  fetch(`${PAST}/`)
    .then(response => response.json())
    .then(data => dispatch(launchesUpdated(data)))
}

export const sortLaunches = sortBy => ({
  type: SORT_PAST_LAUNCHES,
  sortBy,
})
