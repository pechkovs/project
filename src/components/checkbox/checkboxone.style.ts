import styled from '@emotion/styled'

export const CboxContainer = styled.div`
    margin: 0px auto;
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const CboxInput = styled.input`
    cursor: pointer;
    opacity: 0;
    position: absolute;
`
export const CustomCbox = styled.div`
    display: flex;
    margin: 5px 0px;
    font-size: 16px;
    line-height: 100%;
    align-items: center;
    position: relative;
    width: 100%;
    cursor: pointer;
    ::before {
        content: '';
        align-self: flex-start;
        flex: 0 0 24px;
        height: 24px;
        background-color: #f8ede0;
        border-radius: 5px;
        margin: 0px 10px 0px 0px;
        border: 0.5px solid #ad937b;
    }
`
export const CboxLabel = styled.label`
    .CboxInput:checked + .CustomCbox::before {
        content: '\\002713';
        background-color: #f8ede0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
