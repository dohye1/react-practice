import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'style/GlobalStyle'
import Button from 'components/Button'
import { dark, light } from 'style/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const theme = themeMode === 'light' ? { mode: light } : { mode: dark }

  const toggleTheme = () =>
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button title={themeMode} handleClick={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
