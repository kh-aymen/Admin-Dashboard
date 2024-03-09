import React, { useEffect, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './scenes/Dashboard'
import Layout from './scenes/layout'
import Products from './scenes/products'
import Customers from './scenes/customers'
import Transactions from './scenes/transactions'



const App = () => {
  const mode = useSelector(state => state.global.mode)
  const [theme, setTheme] = useState(createTheme(themeSettings(mode)))

  useEffect(() => {
    setTheme(createTheme(themeSettings(mode)))
  }, [mode])

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to={'/dashboard'} replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/transactions' element={<Transactions />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App