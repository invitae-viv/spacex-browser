import deepFreeze from 'deep-freeze'
import reducer from '../../src/reducers/upcomingLaunches'
import { exampleLaunchA, exampleLaunchB, flattenedA, flattenedB } from '../__mocks__/launches'
import { UPDATE_UPCOMING_LAUNCHES, SORT_UPCOMING_LAUNCHES } from '../../src/actions/index'

describe('upcomingLaunches reducer', () => {
  const initialState = {
    data: [],
    sortBy: 'launch_date_utc',
    sortDir: 'desc',
    yearFilter: -1,
    rocketFilter: '',
  }
  deepFreeze(initialState)

  deepFreeze(exampleLaunchA)
  deepFreeze(exampleLaunchB)

  deepFreeze(flattenedA)
  deepFreeze(flattenedB)

  it('updateData should succeed', () => {
    const action = {
      type: UPDATE_UPCOMING_LAUNCHES,
      data: [exampleLaunchA, exampleLaunchB],
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      data: [flattenedA, flattenedB],
    })
  })

  it('sortData should succeed', () => {
    const action = {
      type: SORT_UPCOMING_LAUNCHES,
      sortBy: 'launch_date_utc',
    }
    const state = {
      ...initialState,
      data: [exampleLaunchA, exampleLaunchB],
    }

    // sorting by same field as initialState causes sortBy to invert
    expect(reducer(state, action)).toEqual({
      ...initialState,
      data: [exampleLaunchA, exampleLaunchB],
      sortDir: 'asc',
      sortBy: 'launch_date_utc',
    })

    action.sortBy = 'site_name'
    expect(reducer(state, action)).toEqual({
      ...initialState,
      data: [exampleLaunchA, exampleLaunchB],
      sortDir: 'desc',
      sortBy: 'site_name',
    })

    // test inverse path
    state.sortDir = 'asc'
    state.sortBy = 'site_name'
    action.sortBy = 'site_name'
    expect(reducer(state, action)).toEqual({
      ...initialState,
      data: [exampleLaunchA, exampleLaunchB],
      sortDir: 'desc',
      sortBy: 'site_name',
    })
  })
})
