/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { launchShape } from '../../reducers/launchCommon'

const Overview = ({ launch }) => {
  const {
    flight_number,
    launch_date_utc,
    launch_site: { site_name_long },
    launch_success,
    rocket: { rocket_name, rocket_type },
  } = launch
  return (
    <section>
      <h3>Details</h3>
      <table>
        <tbody>
          <tr>
            <th>Flight Number</th>
            <td>{flight_number}</td>
          </tr>
          <tr>
            <th>Launch Site</th>
            <td>{site_name_long}</td>
          </tr>
          <tr>
            <th>Rocket Type</th>
            <td>
              {rocket_name} {rocket_type}
            </td>
          </tr>
          <tr>
            <th>Successful</th>
            <td>{launch_success === null ? '--' : launch_success ? 'Yes' : 'No'}</td>
          </tr>
          <tr>
            <th>Launch Date</th>
            <td>{moment(launch_date_utc).format('L')}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

Overview.propTypes = {
  launch: PropTypes.shape(launchShape).isRequired,
}

export default Overview
