import React from 'react'
import PropTypes from 'prop-types'
import { TableBody, TableCell, TableRow } from 'material-ui/Table'
import {
  commonLaunchShape,
  gridColumns,
  compareLaunches,
  filterRockets,
} from '../../reducers/launchCommon'

const LaunchGridBody = ({
  selectLaunch,
  launches: { data, sortBy, sortDir, rocketFilter, selectedId },
}) => {
  const compare = compareLaunches(sortBy, sortDir)
  const filterer = filterRockets(rocketFilter)

  return (
    <TableBody>
      {data
        .filter(filterer)
        .sort(compare)
        .map((row, idx) => (
          <TableRow
            key={idx}
            onClick={() => selectLaunch(row.flight_number)}
            selected={row.flight_number === selectedId}
          >
            {gridColumns.map(({ id, numeric, padding, formatter }) => (
              <TableCell key={id} numeric={numeric} padding={padding}>
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
  selectLaunch: PropTypes.func.isRequired,
}

export default LaunchGridBody
