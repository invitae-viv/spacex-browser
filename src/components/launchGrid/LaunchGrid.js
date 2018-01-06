import React from 'react'
import Table from 'material-ui/Table'
import LaunchGridFilters from './LaunchGridFilters'
import LaunchGridHeader from './LaunchGridHeader'
import LaunchGridBody from './LaunchGridBody'

const LaunchGrid = props => (
  <div>
    <LaunchGridFilters />
    <Table>
      <LaunchGridHeader {...props} />
      <LaunchGridBody {...props} />
    </Table>
  </div>
)

export default LaunchGrid
