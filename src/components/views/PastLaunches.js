import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LaunchGrid from '../launchGrid/LaunchGrid'
import * as launchActions from '../../actions/pastLaunches'

class PastLaunches extends Component {
  componentDidMount() {
    this.props.updateLaunches()
  }

  render() {
    return (
      <div>
        <LaunchGrid {...this.props} />
      </div>
    )
  }
}

PastLaunches.propTypes = {
  updateLaunches: PropTypes.func.isRequired,
}

const mapStateToProps = ({ pastLaunches }) => ({ launches: pastLaunches })
const mapDispatchToProps = dispatch => bindActionCreators(launchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches)
