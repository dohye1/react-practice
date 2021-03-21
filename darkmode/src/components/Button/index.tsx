import React from 'react'
import * as S from './style'

interface ButtonProps {
  mode: string
  handleClick: () => void
}

const Button = ({ mode, handleClick }: ButtonProps) => {
  return (
    <S.Main onClick={handleClick} mode={mode}>
      <S.Mode mode={mode}>
        {mode === 'light' ? 'LIGHT MODE' : 'DARK MODE'}
      </S.Mode>
      <S.ToggleBall mode={mode}>
        <span>{mode === 'light' ? '🌞' : '🌛'}</span>
      </S.ToggleBall>
    </S.Main>
  )
}

export default Button
