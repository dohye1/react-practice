import React from 'react'
import * as S from './style'

interface ButtonProps {
  title: string
  handleClick: () => void
}

const Button = ({ title, handleClick }: ButtonProps) => {
  return (
    <S.Main onClick={handleClick}>
      <p>{'버튼 > ' + title}</p>
    </S.Main>
  )
}

export default Button
