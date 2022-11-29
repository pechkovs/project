import styled from '@emotion/styled'

export const CheckboxContainer = styled.div`
    margin: 0px 0px 10px 0px;
    display: flex;
    label {
        display: inline-flex;
        font-size: 16px;
        line-height: 140%;
        align-items: flex-start;
        width: 100%;
        position: relative;
        cursor: pointer;
    }
    input {
        cursor: pointer;
        opacity: 0;
        position: absolute;
    }

    input:checked {
        & + label::before {
            content: '\\002713';
            background-color: #f8ede0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    input:focus {
        & + label::before {
            box-shadow: 0 0 20px white;
        }
    }

    label::before {
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
