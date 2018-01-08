import { combineReducers } from 'redux'
import upcomingLaunches from './upcomingLaunches'
import pastLaunches from './pastLaunches'

const reducers = {
  pastLaunches,
  upcomingLaunches,
}

export default combineReducers(reducers)
