/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import queryString from 'query-string'
import Visible from 'react-visible'
import YouTube from 'react-youtube'
import { launchShape } from '../../reducers/launchCommon'

const youTubeHash = 'https://www.youtube.com/watch?v'

const playerOptions = {
  width: '320',
  height: '195',
}

const Video = ({ launch: { links: { video_link } } }) => {
  const parsed = queryString.parse(video_link)
  const videoId = parsed[youTubeHash] || null

  return (
    <section>
      <h3>Video</h3>
      <Visible isVisible={!!videoId}>
        <YouTube videoId={videoId} opts={playerOptions} />
      </Visible>
      <Visible isVisible={!videoId}>Not available</Visible>
    </section>
  )
}

Video.propTypes = {
  launch: PropTypes.shape(launchShape).isRequired,
}

export default Video
