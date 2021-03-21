import styled, { css } from 'styled-components'

type ModeProps = {
  mode: string
}

export const Main = styled.div<ModeProps>`
  width: 180px;
  height: 50px;
  background-color: red;
  border-radius: 50px;
  display: flex;
  background-color: white;
  margin: 30px auto;
`
export const Mode = styled.span<ModeProps>`
  line-height: 50px;
  font-size: 10px;
  font-weight: 600;
  transition: 0.5s;
  ${(props) =>
    props.mode === 'light'
      ? css`
          transform: translateX(6rem);
        `
      : css`
          transform: translateX(1rem);
        `}
`

export const ToggleBall = styled.div<ModeProps>`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-top: 3px;
  ${(props) =>
    props.mode === 'light'
      ? css`
          background-color: ${props.theme.mode.mainBackground};
          transform: translateX(-3.6rem);
        `
      : css`
          background-color: ${props.theme.mode.mainBackground};
          transform: translateX(4.5rem);
        `}
`
