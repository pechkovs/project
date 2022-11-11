import React from 'react'
import {
    FooterAdress,
    FooterColumn,
    FooterDev,
    FooterDevIcon,
    FooterDevRow,
    FooterRow,
    FooterSocial,
} from './footer.style'

const Footer = () => {
    return (
        <>
            <FooterRow>
                <FooterColumn>
                    <FooterAdress>
                        <p>г.Нижнекамск</p>
                        <p>Менделеева 23а, тел.: 8 (917) 894-98-64</p>
                        <p>Мира 110, тел.: 8 (987) 188-33-45</p>
                    </FooterAdress>
                </FooterColumn>
                <FooterColumn>
                    <FooterSocial>
                        <a href="#">
                            <img
                                src={`${__webpack_public_path__}remote-assets/instagram.png`}
                                alt="instagram"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={`${__webpack_public_path__}remote-assets/whatsapp.png`}
                                alt="whatsapp"
                            />
                        </a>
                        <a href="#">
                            <img
                                src={`${__webpack_public_path__}remote-assets/phone.png`}
                                alt="phone"
                            />
                        </a>
                    </FooterSocial>
                </FooterColumn>
                <FooterColumn>
                    <FooterDevRow>
                        <div>
                            <a href="#" style={{ textDecoration: 'none' }}>
                                <FooterDev>
                                    powered by <br /> #svchesnovski
                                </FooterDev>
                            </a>
                        </div>
                        <div>
                            <span>
                                <FooterDevIcon
                                    src={`${__webpack_public_path__}remote-assets/Add_a_heading-removebg-preview.png`}
                                    alt="Add_a_heading-removebg-preview"
                                />
                            </span>
                        </div>
                    </FooterDevRow>
                </FooterColumn>
            </FooterRow>
        </>
    )
}
export default Footer
