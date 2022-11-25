import { getNavigationsValue } from '@ijl/cli'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderNav, Logoimg, Navbar, NavbarA, NavbarLi } from './header.style'

const Header = () => {
    const navigate = useNavigate()
    return (
        <>
            <HeaderNav>
                <span
                    onClick={() =>
                        navigate(getNavigationsValue('sugarbun.main'))
                    }
                >
                    <Logoimg
                        src={`${__webpack_public_path__}remote-assets/Main_logo.png`}
                        alt="Main_logo"
                    />
                </span>
                <div>
                    <Navbar>
                        <NavbarLi>
                            <NavbarA to={getNavigationsValue('sugarbun.main')}>
                                Главная
                            </NavbarA>
                        </NavbarLi>
                        <NavbarLi>
                            <NavbarA to={getNavigationsValue('sugarbun.menu')}>
                                Меню
                            </NavbarA>
                        </NavbarLi>
                        <NavbarLi>
                            <NavbarA
                                to={getNavigationsValue('sugarbun.constructor')}
                            >
                                Конструктор
                            </NavbarA>
                        </NavbarLi>
                        <NavbarLi>
                            <NavbarA to={getNavigationsValue('sugarbun.admin')}>
                                Личный кабинет
                            </NavbarA>
                        </NavbarLi>
                    </Navbar>
                </div>
            </HeaderNav>
        </>
    )
}
export default Header
