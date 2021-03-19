import styled from 'styled-components'

export const Main = styled.div`
  width: 100%;
  height: 100%;
  p {
    color: ${({ theme }) => theme.mode.primaryText};
  }
`
