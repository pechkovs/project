import styled from '@emotion/styled'

export const CardItem = styled.div`
    display: inline-flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.849);
    margin: 10px;
    padding: 30px;
    justify-content: space-around;
    width: calc(100% / 3 - 30px);
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
    z-index: 20;
    position: static;
    text-align: center;
    color: #bf9270;
    font-style: normal;
    font-size: 2em;
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
    background-color: #f44336;
    position: relative;
    left: 25%;
    border: none;
    border-radius: 30px;
    color: white;
    padding: 12px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    width: 250px;
    cursor: pointer;
`
