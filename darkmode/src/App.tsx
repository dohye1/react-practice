import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'style/GlobalStyle'
import Button from 'components/Button'
import { dark, light } from 'style/theme'
import useTheme from 'hooks/useTheme'

function App() {
  const [themeMode, toggleTheme] = useTheme()
  const theme = themeMode === 'light' ? { mode: light } : { mode: dark }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button mode={themeMode} handleClick={toggleTheme} />
    </ThemeProvider>
  )
}

export default App
