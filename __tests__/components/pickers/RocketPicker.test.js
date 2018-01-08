import React from 'react'
import RocketPicker from '../../../src/components/pickers/RocketPicker'
import DebouncedTextField from '../../../src/components/DebouncedTextField'

describe('RocketPicker component', () => {
  it('passes child props to DebouncedTextField', () => {
    const instance = shallow(<RocketPicker value="" onChange={f => f} />)

    expect(instance.find(DebouncedTextField)).toHaveLength(1)
  })
})
