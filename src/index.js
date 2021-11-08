import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './app/store'
import { Provider } from 'react-redux'

import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material/styles'

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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
