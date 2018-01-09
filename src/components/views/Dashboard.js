import React, { Component } from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import UpcomingLaunches from './UpcomingLaunches'
import PastLaunches from './PastLaunches'
import SpacexLogo from '../../assets/SpacexLogo.svg'

class Dashboard extends Component {
  /**
   * Vacillating between making this a connected, pure function or just storing
   * the selected tab index here in local state.
   * Doesn't feel warranted to spin up a reducer just to store this one value.
   * In a larger app, there'd be more "global" vars like this or a user/session
   * state to tack this onto.
   */
  constructor(props) {
    super(props)
    this.state = {
      selectedTabIdx: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, selectedTabIdx) {
    this.setState({ selectedTabIdx })
  }

  render() {
    const { selectedTabIdx } = this.state

    return (
      <div>
        <header>
          <SpacexLogo />
          <h2>Launch Browser</h2>
        </header>

        <Tabs indicatorColor="primary" value={selectedTabIdx} onChange={this.handleChange}>
          <Tab label="Past Launches" />
          <Tab label="Upcoming Launches" />
        </Tabs>

        {selectedTabIdx === 0 && <PastLaunches />}
        {selectedTabIdx === 1 && <UpcomingLaunches />}
      </div>
    )
  }
}

export default Dashboard
