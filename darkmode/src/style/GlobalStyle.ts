import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    ${reset}
    {
        padding:0;
        margin:0;
    }

    body{
        width:100%;
        height:100%;
        background-color: ${({ theme }) => theme.mode.mainBackground};
        transition:0.5s;
    }
`
export default GlobalStyle
