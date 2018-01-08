import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table'
import Tooltip from 'material-ui/Tooltip'
import { commonLaunchShape, gridColumns } from '../../reducers/launchCommon'

const LaunchGridHeader = ({ launches: { sortBy, sortDir }, sortLaunches }) => (
  <TableHead>
    <TableRow>
      {gridColumns.map(({ id, numeric, padding, label }) => (
        <TableCell
          key={id}
          numeric={numeric}
          padding={padding}
          sortDirection={sortBy === id ? sortDir : false}
        >
          <Tooltip
            title="Sort"
            placement={numeric ? 'bottom-end' : 'bottom-start'}
            enterDelay={300}
          >
            <TableSortLabel
              active={sortBy === id}
              direction={sortDir}
              onClick={() => sortLaunches(id)}
            >
              {label}
            </TableSortLabel>
          </Tooltip>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
)

LaunchGridHeader.propTypes = {
  launches: PropTypes.shape(commonLaunchShape).isRequired,
  sortLaunches: PropTypes.func.isRequired,
}

export default LaunchGridHeader
