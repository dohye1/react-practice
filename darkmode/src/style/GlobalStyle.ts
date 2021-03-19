import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${reset}
    {
        padding:0;
        margin:0;
    }

    body{
        background-color: ${({ theme }) => theme.mode.mainBackground};
    }
`
export default GlobalStyle
