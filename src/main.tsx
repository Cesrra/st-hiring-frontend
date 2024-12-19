import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.tsx'
import './styles/globalStyles.css'
import store from './store'
import theme from './styles/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>  
    </Provider>
  </React.StrictMode>,
)
