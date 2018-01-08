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
    MuiTableBody: {
      root: {
        maxHeight: '600px !important',
      },
    },
    MuiTableHead: {
      root: {
        fontSize: 14,
      },
    },
    MuiTableRow: {
      root: {
        cursor: 'pointer',
      },
      selected: {
        backgroundColor: `${indigo[800]} !important`,
        color: indigo[50],
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
