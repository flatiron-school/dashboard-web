import './App.css'
import PrimarySearchAppBar from './PrimaryAppBar'
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/system'

const theme = createTheme({
  palette: {
    primary: {
      main: '#54a6d2',
      light: '#89d7ff',
      dark: '#0c77a1'
    },
    secondary: {
      main: '#9aff9f',
      light: '#ceffd1',
      dark: '#67cb6f'
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(F,F,F,0.6)',
    },
    background: {
      paper: '#FFFFFF',
      default: '#000000'
    }
  },
})

const App = () => { 
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <PrimarySearchAppBar />
      </ThemeProvider>
    </div>
  )
}

export default App
