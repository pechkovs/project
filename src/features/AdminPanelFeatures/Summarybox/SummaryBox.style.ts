import styled from '@emotion/styled'

export const styledSummarybox = styled.div`
    margin: 0 1rem 1.8rem;
    flex: 1 1 350px;
`
export const styledSummaryWrapper = styled.div`
    @include flex();
    margin: 1rem 0;
    flex: 1;
    flex-wrap: wrap;

    &__icon {
        margin: 0 1rem;
    }
    &__info__amount {
        display: flex;
        margin-top: 0.3rem;
        flex-wrap: wrap;
        & h4 {
            margin-top: 1rem;
            font-size: 32px;
            font-weight: 400;
            white-space: nowrap;
        }
        & sup {
            font-size: $fontSizeBodyLarge;
        }
    }
`
