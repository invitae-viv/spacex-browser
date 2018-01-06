import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import upcomingLaunches from './upcomingLaunches'

const reducers = {
  form,
  upcomingLaunches,
}

export default combineReducers(reducers)
