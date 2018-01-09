/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import some from 'lodash/some'
import Visible from 'react-visible'
import Chip from 'material-ui/Chip'
import { launchShape } from '../../reducers/launchCommon'

const styles = theme => ({
  chip: {
    margin: theme.spacing.unit / 2,
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  noReuse: {
    fontStyle: 'italic',
    margin: theme.spacing.unit / 2,
  },
})

const Reuse = ({ launch, classes }) => {
  const { reuse: { capsule, core, fairings, side_core1, side_core2 } } = launch
  const elements = [
    { name: 'Capsule', reused: capsule },
    { name: 'Core', reused: core },
    { name: 'Fairings', reused: fairings },
    { name: 'Side Core 1', reused: side_core1 },
    { name: 'Side Core 2', reused: side_core2 },
  ]

  const someReused = some(elements, 'reused')

  return (
    <section>
      <h3>Reused</h3>
      <div className={classes.row}>
        {elements.map(({ name, reused }) => (
          <Visible isVisible={reused} key={name}>
            <Chip label={name} className={classes.chip} />
          </Visible>
        ))}
      </div>
      {someReused || <span className={classes.noReuse}>None</span>}
    </section>
  )
}

Reuse.propTypes = {
  launch: PropTypes.shape(launchShape).isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
}

export default withStyles(styles)(Reuse)
