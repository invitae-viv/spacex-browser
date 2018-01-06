import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import upcomingLaunches from './upcomingLaunches'
import pastLaunches from './pastLaunches'

const reducers = {
  form,
  pastLaunches,
  upcomingLaunches,
}

export default combineReducers(reducers)
