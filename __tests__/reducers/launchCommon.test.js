import { compareLaunches, filterRockets } from '../../src/reducers/launchCommon'
import { exampleLaunchA, exampleLaunchB } from '../__mocks__/launches'

describe('launchCommon reducer', () => {
  it('compareLaunches should succeed', () => {
    expect(compareLaunches('launch_date_unix', 'desc')(exampleLaunchA, exampleLaunchB)) //
      .toBeGreaterThan(0)

    expect(compareLaunches('launch_date_unix', 'asc')(exampleLaunchA, exampleLaunchB)) //
      .toBeLessThan(0)

    // launch_date_utc get swapped as launch_date_unix
    expect(compareLaunches('launch_date_utc', 'asc')(exampleLaunchA, exampleLaunchB)) //
      .toBeLessThan(0)

    // TODO should test that fails gracefully for unknown fields and sort directions
  })

  it('filterRockets should succeed', () => {
    const rocket = { rocket_name: 'Falcon 9' }

    // direct match
    expect(filterRockets('Falcon 9')(rocket)).toBeTruthy()

    // Partial
    expect(filterRockets('Falco')(rocket)).toBeTruthy()

    // Case-insensitive
    expect(filterRockets('falcon 9')(rocket)).toBeTruthy()

    // Numeric
    expect(filterRockets(9)(rocket)).toBeTruthy()

    // Miss
    expect(filterRockets('Titan V')(rocket)).toBeFalsy()

    // Empty
    expect(filterRockets('')(rocket)).toBeTruthy()

    // null case
    expect(filterRockets(null)(rocket)).toBeFalsy()

    // undefined case
    expect(filterRockets(undefined)(rocket)).toBeTruthy()
  })
})
