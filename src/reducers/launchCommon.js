import PropTypes from 'prop-types'
import moment from 'moment'

export const defaultState = {
  data: [],
  sortBy: 'launch_date_utc',
  sortDir: 'desc',
}

export const commonLaunchShape = {
  data: PropTypes.array,
  sortBy: PropTypes.string,
  sortDir: PropTypes.oneOf(['asc', 'desc']),
}

/*

details:null
flight_number:53
launch_date_local:"2018-01-07T20:00:00-05:00"
launch_date_unix:1515373200
launch_date_utc:"2018-01-08T01:00:00Z"
launch_site:{site_id: "ccafs_slc_40", site_name: "CCAFS SLC 40", site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"}
launch_success:null
launch_year:"2018"
links:{mission_patch: "https://i.imgur.com/c5pL42B.png", reddit_campaign: "https://www.reddit.com/r/spacex/comments/7895bo/zuma_launch_campaign_thread/", reddit_launch: null, reddit_recovery: null, reddit_media: null, …}
reuse:{core: false, side_core1: false, side_core2: false, fairings: false, capsule: false}
rocket:{rocket_id: "falcon9", rocket_name: "Falcon 9", rocket_type: "FT", first_stage: {…}, second_stage: {…}}
telemetry:{flight_club: null}
*/

const defaultFormatter = val => val
const dateFormatter = val => moment(val).format('L')
const boolFormatter = val => (val === null ? '--' : val ? 'Yes' : 'No')

export const gridColumns = [
  {
    id: 'launch_date_utc',
    numeric: false,
    disablePadding: true,
    label: 'Launch Date',
    formatter: dateFormatter,
  },
  {
    id: 'launch_year',
    numeric: true,
    disablePadding: false,
    label: 'Year',
    formatter: defaultFormatter,
  },
  {
    id: 'launch_success',
    numeric: false,
    disablePadding: false,
    label: 'Successful',
    formatter: boolFormatter,
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

// HANDLERS --------------------------------

export const updateData = (state, { data }) => ({
  ...state,
  data,
})

export const sortData = (state, { sortBy }) => ({
  ...state,
  sortBy,
  sortDir: sortBy === state.sortBy ? invertSortDir(state.sortDir) : 'desc',
})
