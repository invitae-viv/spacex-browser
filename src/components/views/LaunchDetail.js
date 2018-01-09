/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Links from '../launchDetails/Links'
import MissionPatch from '../launchDetails/MissionPatch'
import Overview from '../launchDetails/Overview'
import Reuse from '../launchDetails/Reuse'
import Video from '../launchDetails/Video'
import { detailCont, mediaCont } from '../../styles/launchDetail'
import { commonLaunchShape } from '../../reducers/launchCommon'

const styles = {
  paper: {
    padding: '34px 0 34px 34px',
  },
}

const LaunchDetail = ({ launches: { data, selectedId }, classes }) => {
  // We're guaranteed to have a valid selectedId here.
  const launch = data.filter(({ flight_number }) => flight_number === selectedId)[0]

  return (
    <div className={detailCont}>
      <Paper className={classes.paper}>
        <MissionPatch launch={launch} />
        <Overview launch={launch} />
        <Reuse launch={launch} />
        <div className={mediaCont}>
          <Video launch={launch} />
          <Links launch={launch} />
        </div>
      </Paper>
    </div>
  )
}

LaunchDetail.propTypes = {
  launches: PropTypes.shape(commonLaunchShape).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(LaunchDetail)
