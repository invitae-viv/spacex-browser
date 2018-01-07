import React from 'react'
import PropTypes from 'prop-types'
import { TableBody, TableCell, TableRow } from 'material-ui/Table'
import {
  commonLaunchShape,
  gridColumns,
  compareLaunches,
  filterRockets,
} from '../../reducers/launchCommon'

const LaunchGridBody = ({ launches: { data, sortBy, sortDir, rocketFilter } }) => {
  const compare = compareLaunches(sortBy, sortDir)
  const filterer = filterRockets(rocketFilter)

  return (
    <TableBody>
      {data
        .filter(filterer)
        .sort(compare)
        .map((row, idx) => (
          <TableRow key={idx}>
            {gridColumns.map(({ id, numeric, formatter }) => (
              <TableCell key={id} numeric={numeric}>
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
