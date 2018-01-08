import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LaunchGrid from '../launchGrid/LaunchGrid'
import LaunchDetail from './LaunchDetail'
import { tabContent } from '../../styles/dashboard'
import { commonLaunchShape } from '../../reducers/launchCommon'
import * as launchActions from '../../actions/pastLaunches'

class PastLaunches extends Component {
  componentDidMount() {
    this.props.updateLaunches()
  }

  render() {
    const { launches } = this.props
    const { selectedId } = launches
    return (
      <div className={tabContent}>
        <LaunchGrid {...this.props} />
        {selectedId !== -1 && <LaunchDetail launches={launches} />}
      </div>
    )
  }
}

PastLaunches.propTypes = {
  updateLaunches: PropTypes.func.isRequired,
  launches: PropTypes.shape(commonLaunchShape).isRequired,
}

const mapStateToProps = ({ pastLaunches }) => ({ launches: pastLaunches })
const mapDispatchToProps = dispatch => bindActionCreators(launchActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches)
