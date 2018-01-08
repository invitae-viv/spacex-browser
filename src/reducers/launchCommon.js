/* eslint-disable camelcase */
import PropTypes from 'prop-types'
import moment from 'moment'

export const defaultState = {
  data: [],
  sortBy: 'launch_date_utc',
  sortDir: 'desc',
  yearFilter: -1,
  rocketFilter: '',
  selectedId: -1,
}

export const commonLaunchShape = {
  data: PropTypes.array,
  sortBy: PropTypes.string,
  sortDir: PropTypes.oneOf(['asc', 'desc']),
  yearFilter: PropTypes.number,
  rocketFilter: PropTypes.string,
  selectedId: PropTypes.number,
}

const defaultFormatter = val => val
const dateFormatter = val => moment(val).format('L')
const boolFormatter = val => (val === null ? '--' : val ? 'Yes' : 'No')

export const gridColumns = [
  {
    id: 'launch_date_utc',
    numeric: false,
    label: 'Launch Date',
    formatter: dateFormatter,
    padding: 'dense',
  },
  {
    id: 'flight_number',
    numeric: true,
    label: 'Flight #',
    formatter: defaultFormatter,
    padding: 'none',
  },
  {
    id: 'site_name',
    numeric: false,
    label: 'Launch Site',
    formatter: defaultFormatter,
    padding: 'dense',
  },
  {
    id: 'rocket_name',
    numeric: false,
    label: 'Rocket Name',
    formatter: defaultFormatter,
    padding: 'none',
  },
  {
    id: 'launch_success',
    numeric: false,
    label: 'Successful',
    formatter: boolFormatter,
    padding: 'none',
  },
]

const invertSortDir = dir => (dir === 'desc' ? 'asc' : 'desc')

export const compareLaunches = (sortBy, sortDir) => (launchA, launchB) => {
  let sortField = sortBy
  if (sortBy === 'launch_date_utc') {
    sortField = 'launch_date_unix'
  }
  const result = launchA[sortField] - launchB[sortField]

  return sortDir === 'desc' ? -result : result
}

export const filterRockets = rocketFilter => ({ rocket_name }) =>
  RegExp(rocketFilter, 'i').test(rocket_name)

// HANDLERS --------------------------------

export const updateData = (state, { data }) => ({
  ...state,
  data: data.map(row => ({
    ...row,
    // Flatten data a bit in order to simplify column structure
    site_name: row.launch_site.site_name,
    rocket_name: row.rocket.rocket_name,
  })),
  selectedId: -1,
})

export const sortData = (state, { sortBy }) => ({
  ...state,
  sortBy,
  sortDir: sortBy === state.sortBy ? invertSortDir(state.sortDir) : 'desc',
})

export const searchByRocket = (state, { rocketFilter }) => ({
  ...state,
  rocketFilter,
})

export const selectLaunch = (state, { selectedId }) => ({ ...state, selectedId })
