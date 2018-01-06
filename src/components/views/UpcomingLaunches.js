import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LaunchGrid from '../launchGrid/LaunchGrid'
import * as launchActions from '../../actions/upcomingLaunches'

class UpcomingLaunches extends Component {
  componentDidMount() {
    this.props.updateLaunches()
  }

  render() {
    return (
      <div>
        upcoming
        <LaunchGrid />
      </div>
    )
  }
}

UpcomingLaunches.propTypes = {
  updateLaunches: PropTypes.func.isRequired,
}

const mapStateToProps = ({ upcomingLaunches }) => ({ upcomingLaunches })
const mapDispatchToProps = dispatch => bindActionCreators(launchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches)
