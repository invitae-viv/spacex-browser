import React from 'react'
import Paper from 'material-ui/Paper'
import Table from 'material-ui/Table'
import LaunchGridFilters from './LaunchGridFilters'
import LaunchGridHeader from './LaunchGridHeader'
import LaunchGridBody from './LaunchGridBody'
import { gridCont } from '../../styles/grids'

const LaunchGrid = props => (
  <Paper>
    <LaunchGridFilters {...props} />
    <div className={gridCont}>
      <Table>
        <LaunchGridHeader {...props} />
        <LaunchGridBody {...props} />
      </Table>
    </div>
  </Paper>
)

export default LaunchGrid
