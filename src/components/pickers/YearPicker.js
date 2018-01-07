import React from 'react'
import PropTypes from 'prop-types'
import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

const minYear = 2006
const maxYear = new Date().getFullYear() + 1
const numYears = maxYear - minYear
const years = Array(...{ length: numYears })
  .map(Function.call, Number)
  .map(val => val + minYear)

const YearPicker = ({ value, onChange }) => (
  <Select onChange={({ target }) => onChange(target.value)} value={value}>
    <MenuItem key="all" value={-1}>
      ANY
    </MenuItem>
    {years.map(year => (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    ))}
  </Select>
)

YearPicker.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default YearPicker
