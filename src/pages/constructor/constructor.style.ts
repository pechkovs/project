import styled from '@emotion/styled'
import Container from '../../components/container/container'

export const ConstructorPageBody = styled.img`
    background: cover;
    width: 100%;
    height: 120%;
    z-index: -1;
    position: fixed;
    opacity: 30%;
`

export const ConstructorPageTxt = styled(Container)`
    z-index: 20;
    position: relative;
    margin: 0px 0px 30px 0px;
    display: flex;
    flex-direction: column;
`
export const ConstructorPageHeading = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    padding: 0px 15px 0px 15px;
`
export const ConstructorPageP = styled.div`
    color: #876445;
    font-size: 20px;
    text-align: justify;
    font-family: 'Cormorant SC', serif;
    text-align: center;
    margin: 10px 0px 10px 0px;
`
export const ConstructorExamples = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.849);
    margin: 5px;
    padding: 30px;
    flex: 1;
    justify-content: flex-start;
    border: 2px solid #f8ede0;
    height: 420px;
    min-width: 360px;
    max-width: 360px;
`

export const ContainerMain = styled.div`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 10px 0px;
    padding: 0px auto;
`
export const ItemsBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 1180px;
    height: 100%;
    padding: 0 auto;
    margin: 0px auto;
`
export const BlockItem = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.849);
    margin: 5px;
    padding: 30px;
    flex: 1;
    justify-content: space-around;
    border: 2px solid #f8ede0;
    height: 420px;
    min-width: 360px;
    max-width: 360px;
    height: 600px;
    z-index: 20;
`
export const ItemImg = styled.img`
    z-index: 20;
    position: relative;
    max-width: 280px;
`

export const BlockItemTitle = styled.p`
    color: #876445;
    font-weight: 400;
    font-size: 23px;
    font-family: 'Cormorant Unicase', serif;
    text-align: center;
    font-size: auto;
`
export const BlockItemTxt = styled.p`
    margin: 0px 0px 0px 30px;
    font-size: 14px;
    li {
        color: #876445;
        font-family: 'Cormorant Unicase', serif;
    }
`
export const BlockItemPrice = styled.p`
    color: #52616b;
    font-size: 25px;
    font-family: 'Cormorant Unicase', serif;
    font-weight: bolder;
    align-self: center;
`
