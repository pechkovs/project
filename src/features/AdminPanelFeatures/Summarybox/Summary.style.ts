import styled from '@emotion/styled'

export const styledSummary = styled.div`
    margin: 2rem 0;

    &__box {
        @include flex(center, space-between);
        flex-wrap: wrap;
        margin-top: 1rem;
        margin-right: -1rem;
        margin-left: -1rem;
    }
`
