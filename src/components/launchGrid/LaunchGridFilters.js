import PropTypes from 'prop-types'
import React from 'react'
import Toolbar from 'material-ui/Toolbar'
import RocketPicker from '../pickers/RocketPicker'
import YearPicker from '../pickers/YearPicker'
import { commonLaunchShape } from '../../reducers/launchCommon'
import { filterCont } from '../../styles/filters'

const LaunchGridFilters = ({
  launches: { yearFilter, rocketFilter },
  filterByYear,
  filterByRocket,
}) => (
  <div className={filterCont}>
    <Toolbar>
      <h6>Filters</h6>
      <section>
        <span>Year:</span>
        <YearPicker value={yearFilter} onChange={filterByYear} />
      </section>

      <section>
        <span>Rocket:</span>
        <RocketPicker value={rocketFilter} onChange={filterByRocket} />
      </section>
    </Toolbar>
  </div>
)

LaunchGridFilters.propTypes = {
  launches: PropTypes.shape(commonLaunchShape).isRequired,
  filterByYear: PropTypes.func.isRequired,
  filterByRocket: PropTypes.func.isRequired,
}

export default LaunchGridFilters
