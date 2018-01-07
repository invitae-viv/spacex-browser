import React from 'react'
import PropTypes from 'prop-types'
import DebouncedTextField from '../DebouncedTextField'

const RocketPicker = ({ value, onChange }) => (
  <DebouncedTextField onChange={onChange} value={value} placeholder="e. g. Falcon 9" />
)

RocketPicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default RocketPicker
