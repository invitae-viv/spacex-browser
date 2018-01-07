import { createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'

export default createMuiTheme({
  palette: {
    primary: indigo,
    accent: indigo.A100,
  },

  overrides: {
    MuiPaper: {
      root: {
        marginTop: 22,
      },
    },
    MuiTableHead: {
      root: {
        fontSize: 14,
      },
    },
    MuiToolbar: {
      root: {
        backgroundColor: indigo[100],
        maxHeight: 50,
      },
    },
    MuiTooltip: {
      tooltipBottom: {
        fontSize: 14,
      },
    },
  },
})
