import { UPCOMING } from '../api'
import { UPDATE_UPCOMING_LAUNCHES, SORT_UPCOMING_LAUNCHES } from './'

const launchesUpdated = data => ({
  type: UPDATE_UPCOMING_LAUNCHES,
  data,
})

export const updateLaunches = () => (dispatch) => {
  fetch(`${UPCOMING}/`)
    .then(response => response.json())
    .then(data => dispatch(launchesUpdated(data)))
}

export const sortLaunches = sortBy => ({
  type: SORT_UPCOMING_LAUNCHES,
  sortBy,
})
