import React from 'react'
import PropTypes from 'prop-types'
import { TableBody, TableCell, TableRow } from 'material-ui/Table'
import { commonLaunchShape, gridColumns, compareLaunches } from '../../reducers/launchCommon'

const LaunchGridBody = ({ launches: { data, sortBy, sortDir } }) => {
  const compare = compareLaunches(sortBy, sortDir)

  return (
    <TableBody>
      {data.sort(compare).map((row, idx) => (
        <TableRow key={idx}>
          {gridColumns.map(({ id, numeric, disablePadding, formatter }) => (
            <TableCell key={id} numeric={numeric} padding={disablePadding ? 'none' : 'default'}>
              {formatter(row[id])}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  )
}

LaunchGridBody.propTypes = {
  launches: PropTypes.shape(commonLaunchShape).isRequired,
}

export default LaunchGridBody
