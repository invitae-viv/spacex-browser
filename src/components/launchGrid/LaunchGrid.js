import React from 'react'
import Paper from 'material-ui/Paper'
import Table from 'material-ui/Table'
import LaunchGridFilters from './LaunchGridFilters'
import LaunchGridHeader from './LaunchGridHeader'
import LaunchGridBody from './LaunchGridBody'

const LaunchGrid = props => (
  <Paper>
    <LaunchGridFilters {...props} />
    <Table>
      <LaunchGridHeader {...props} />
      <LaunchGridBody {...props} />
    </Table>
  </Paper>
)

export default LaunchGrid
