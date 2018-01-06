import { createMuiTheme } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'

export default createMuiTheme({
  palette: {
    primary: indigo,
    accent: indigo[400],
  },

  overrides: {
    MuiAppBar: {
      root: {
        background: 'linear-gradient(45deg, #000 30%, #000 90%)',
      },
    },
    MuiButton: {
      root: {},
      raisedAccent: {
        background: 'linear-gradient(180deg, #333 30%, #000 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
      },
      disabled: {
        background: 'linear-gradient(180deg, #aaa 30%, #aaa 90%)',
        color: '#555',
      },
    },
    MuiDialogContent: {
      root: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: '1rem',
      },
    },
    MuiExpansionPanel: {
      root: {
        backgroundColor: '#444',
        color: 'white',
        marginTop: 4,
      },
      expanded: {
        marginTop: '4px !important',
      },
    },
    MuiExpansionPanelSummary: {
      expandIcon: {
        color: 'white',
      },
    },
    MuiFormControlLabel: {
      label: {
        color: 'white',
      },
    },
    MuiSelect: {
      root: {
        backgroundColor: 'white',
        borderRadius: 5,
        border: '1px solid #ccc',
        height: 30,
        paddingLeft: 5,
      },
    },
    MuiToolbar: {
      root: {
        color: 'white',
      },
    },
    MuiTooltip: {
      tooltipBottom: {
        fontSize: 14,
      },
    },
  },
})
