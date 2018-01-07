import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import omit from 'lodash/omit'
import TextField from 'material-ui/TextField'

const DebouncedTextField = (props) => {
  const { onChange, timeout } = props
  const debouncedOnChange = debounce(onChange, timeout)
  const passed = omit(props, ['onChange', 'timeout'])

  return <TextField onChange={({ target }) => debouncedOnChange(target.value)} {...passed} />
}

DebouncedTextField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  timeout: PropTypes.number,
}

DebouncedTextField.defaultProps = {
  timeout: 50,
}

export default DebouncedTextField
