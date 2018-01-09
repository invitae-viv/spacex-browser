import deepFreeze from 'deep-freeze'
import reducer from '../../src/reducers/upcomingLaunches'
import { exampleLaunchA, exampleLaunchB, flattenedA, flattenedB } from '../__mocks__/launches'
import {
  UPDATE_UPCOMING_LAUNCHES,
  SORT_UPCOMING_LAUNCHES,
  SELECT_UPCOMING_LAUNCH,
  FILTER_UPCOMING_LAUNCHES_BY_YEAR,
} from '../../src/actions/index'

describe('upcomingLaunches reducer', () => {
  const initialState = {
    data: [],
    sortBy: 'launch_date_utc',
    sortDir: 'desc',
    yearFilter: -1,
    rocketFilter: '',
    selectedId: -1,
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

  it('searchByYear should update yearFilter', () => {
    const action = {
      type: FILTER_UPCOMING_LAUNCHES_BY_YEAR,
      yearFilter: 2004,
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      yearFilter: 2004,
    })
  })

  it('selectLaunch should update selectedId', () => {
    const action = {
      type: SELECT_UPCOMING_LAUNCH,
      selectedId: 53,
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      selectedId: 53,
    })
  })
})
