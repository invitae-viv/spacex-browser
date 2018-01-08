/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { detailCont } from '../../styles/launchDetail'
import { commonLaunchShape } from '../../reducers/launchCommon'

const LaunchDetail = ({ launches: { data, selectedId } }) => {
  // We're guaranteed to have a valid selectedId here.

  const launch = data.filter(({ flight_number }) => flight_number === selectedId)[0]
  console.log(launch)

  const {
    flight_number,
    launch_date_utc,
    launch_site: { site_name, site_name_long },
    launch_success,
    rocket,
    links: {
      mission_patch,
      article_link,
      presskit,
      reddit_campaign,
      reddit_launch,
      reddit_media,
      reddit_recovery,
      video_link,
    },
    resuse: { capsule, core, fairings, side_core1, side_core2 } = {},
  } = launch

  return (
    <div className={detailCont}>
      <h3>Details</h3>

      {mission_patch && (
        <figure>
          <img src={mission_patch} alt="Mission patch" />
          <figcaption>Mission Patch</figcaption>
        </figure>
      )}

      <section>
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
              <th />
              <td />
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

LaunchDetail.propTypes = {
  launches: PropTypes.shape(commonLaunchShape).isRequired,
}

export default LaunchDetail
