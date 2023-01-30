import styled from '@emotion/styled'

export const CardItem = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.849);
    margin: 10px;
    padding: 30px;
    justify-content: space-around;
    width: calc(100% / 3 - 40px);
    height: 800px;
    z-index: 20;
`
export const CardPlace = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`
export const CardTitle = styled.div`
    color: #876445;
    height: 74px;
    font-weight: 400;
    font-size: 30px;
    font-family: 'Cormorant Unicase', serif;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const CardTxt = styled.div`
    z-index: 20;
    position: relative;
    left: 30px;
    text-align: left;
    color: #bf9270;
    font-style: normal;
    font-size: 1.4em;
`
export const CardPrice = styled.div`
    z-index: 20;
    position: static;
    text-align: center;
    font-style: normal;
    font-size: 1.6em;
`
export const CardClick = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    background-color: #d2535a;
    color: white;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 0 2px 0 #882125;
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
