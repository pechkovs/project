import styled from '@emotion/styled'

export const StyledChart = styled.div`
    margin-bottom: 2rem;
    &__wrapper {
        display: flex;
        overflow: auto;
        width: 100%;
        min-width: 500px;
    }
`

export const ChartBox = styled.div`
    display: block;
    flex-grow: 1;
    max-width: 500px;
    align-items: center;
    border: solid;
    border-radius: 12px;
    margin: 2rem;
    padding: 1em;
    border-color: #bf9270;
`

export const Chartier = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1em;
    justify-content: space-evenly;
`

export const ChartWrapper = styled.div`
    @include flex();
    flex-direction: row;
    align-items: center;
    min-width: 400px;
    flex: 3 1 500px;
`

export const ChartContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
`

export const ChartButtonBox = styled.div`
    font: inherit;
    border-radius: $smallBorderRadius;
    padding: 0.8rem 3rem;
    cursor: pointer;
    margin: 0 0.5rem;

    &:hover,
    &:active {
        background-color: darken(#3c4b6d, 10%);
    }

    &:focus {
        outline: none;
    }
`
