import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles'
import Dashboard from './views/Dashboard'
import { app } from '../styles/app'
import muiTheme from '../styles/muiTheme'

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <div className={app}>
      <Dashboard />
    </div>
  </MuiThemeProvider>
)

export default App
