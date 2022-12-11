import { css } from '@emotion/react'

export const globalStyles = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        height: 100%;
    }
    div#app {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    h1 {
        color: #876445;
        font-family: 'Cormorant Unicase', serif;
        font-size: 30px;
    }
`
