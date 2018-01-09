/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import Visible from 'react-visible'
import { launchShape } from '../../reducers/launchCommon'

const MissionPatch = ({ launch: { links: { mission_patch } } }) => (
  <figure>
    <Visible isVisible={!!mission_patch}>
      <img src={mission_patch} alt="Mission patch" />
      <figcaption>Mission Patch</figcaption>
    </Visible>
  </figure>
)

MissionPatch.propTypes = {
  launch: PropTypes.shape(launchShape).isRequired,
}

export default MissionPatch
