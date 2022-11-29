import styled from '@emotion/styled'
import Container from '../../components/container/container'

export const ConstructorForm = styled(Container)`
    width: 550px;
    margin: 0px auto;
    padding: 30px 0;
    font-family: 'Cormorant Unicase', serif;
    color: #4b3827;
    & {
        outline: 0;
    }
`
export const FormItem = styled.div`
    margin: 0px 0px 10px 0px;
    max-width: 100%;
`
export const FormLabel = styled.div`
    padding: 10px 0px 0px 0px;
`
export const TextArea = styled.textarea`
    min-height: 60px;
    resize: vertical;
    background-color: #f8ede0;
    height: 50px;
    padding: 0px 20px;
    border: 0.5px solid #ad937b;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    min-height: 40px;
    transition: all 0.5s ease 0s;
    font-family: 'Cormorant Unicase', serif;
`

export const Select = styled.select`
    height: 50px;
    width: 100%;
    border: 0.5px solid #ad937b;
    border-radius: 5px;
    font-size: 16px;
    padding: 0px 20px;
    background-color: #f8ede0;
    font-family: 'Cormorant Unicase', serif;
`
export const CheckboxLabel = styled.label`
    display: inline-flex;
    font-size: 16px;
    line-height: 140%;
    align-items: center;
    width: 100%;
    position: relative;
    cursor: pointer;
    & a {
        color: #9d4145;
    }
    :before {
        content: '';
        align-self: flex-start;
        flex: 0 0 24px;
        height: 24px;
        background-color: #f8ede0;
        border-radius: 5px;
        margin: 0px 30px 0px 0px;
    }
    :after {
        transition: transform 0.5s ease 0s;
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 16px;
        height: 16px;
        background-color: #9d4145;
        border-radius: 4px;
        transform: scale(0);
    }
`
export const CheckboxInput = styled.input`
    :checked {
        transform: scale(1);
    }
`

export const CheckboxItem = styled.p`
    display: inline-flex;
    font-size: 16px;
    line-height: 140%;
    align-items: center;
    width: 100%;
    position: relative;
    cursor: pointer;
    & a {
        color: #9d4145;
    }
    :before {
        content: '';
        align-self: flex-start;
        flex: 0 0 24px;
        height: 24px;
        background-color: #f8ede0;
        border-radius: 5px;
        margin: 0px 30px 0px 0px;
    }
    :after {
        transition: transform 0.5s ease 0s;
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 16px;
        height: 16px;
        background-color: #9d4145;
        border-radius: 4px;
        transform: scale(1);
    }
`
export const File = styled.div`
    position: relative;
`
export const FileInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: 0;
    cursor: pointer;
`
export const FileButton = styled.button`
    display: inline-flex;
    min-height: 40px;
    border-radius: 30px;
    border: 0.5px solid #ad937b;
    justify-content: center;
    align-items: center;
    background-color: #d2535a;
    padding: 0px 20px;
    color: white;
    font-family: 'Cormorant Unicase', serif;
    transition: background-color 0.5s ease 0s;
    :hover {
        background-color: #96292e;
    }
    :active {
        top: 3px;
        box-shadow: 0 2px 0 #882125;
    }
`
export const FilePreview = styled.div`
    display: inline-block;
    max-width: 100px;
    padding: 10px 0px 0px 0px;
    & img {
        max-width: 100%;
    }
`
export const FormInput = styled.input`
    height: 50px;
    padding: 0px 20px;
    border: 0.5px solid #ad937b;
    border-radius: 5px;
    width: 100%;
    font-size: 18px;
    min-height: 40px;
    background-color: #f8ede0;
    transition: all 0.5s ease 0s;
    font-family: 'Cormorant Unicase', serif;
`
export const FormButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60px;
    background-color: #d2535a;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0 5px 0 #882125;
    transition: background-color 0.5s ease 0s;
    position: relative;
    top: 0;
    :hover {
        background-color: #96292e;
    }
    :active {
        top: 3px;
        box-shadow: 0 2px 0 #882125;
    }
`
