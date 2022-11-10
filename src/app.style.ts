import { css } from '@emotion/react'

export const globalStyles = css`
    body {
        background-color: #f8e7d4;
        position: relative;
        margin: 0;
        min-height: 100%;
        height: 100%;
    }

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
`
