import styled from '@emotion/styled'
import Container from '../../components/container/container'

export const FooterRow = styled(Container)`
    display: flex;
    margin: 0px auto;
    align-items: center;
    background-color: #ffffffe0;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 50px 30px;
    z-index: 20;
`
export const FooterColumn = styled.div`
    flex: 0 1 33, 333%;
`
export const FooterAdress = styled.p`
    color: #52616b;
    font-size: 14px;
    line-height: 16px;
    font-family: 'Cormorant SC', serif;
`
export const FooterSocial = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    & img {
        width: 70px;
        opacity: 0.7;
        margin: 0px 7.5px;
    }
    & img:hover {
        width: 90px;
        transition: all 0.3s ease 0s;
    }
`
export const FooterDev = styled.p`
    color: #52616b;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 18px;
    font-family: 'Cormorant SC', serif;
`
export const FooterDevIcon = styled.img`
    width: 100px;
`
export const FooterDevRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
