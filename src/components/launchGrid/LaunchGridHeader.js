import React from 'react'
import PropTypes from 'prop-types'
import { TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table'
import Tooltip from 'material-ui/Tooltip'
import { commonLaunchShape, gridColumns } from '../../reducers/launchCommon'

const LaunchGridHeader = ({ launches: { sortBy, sortDir }, sortLaunches }) => (
  <TableHead>
    <TableRow>
      {gridColumns.map(column => (
        <TableCell
          key={column.id}
          numeric={column.numeric}
          padding={column.disablePadding ? 'none' : 'default'}
          sortDirection={sortBy === column.id ? sortDir : false}
        >
          <Tooltip
            title="Sort"
            placement={column.numeric ? 'bottom-end' : 'bottom-start'}
            enterDelay={300}
          >
            <TableSortLabel
              active={sortBy === column.id}
              direction={sortDir}
              onClick={() => sortLaunches(column.id)}
            >
              {column.label}
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
