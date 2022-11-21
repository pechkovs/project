import { getNavigationsValue } from '@ijl/cli'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavbarItem from './components/navbar-item/navbar-item'
import { HeaderNav, Logoimg, Navbar } from './header.style'

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
                        <NavbarItem to={getNavigationsValue('sugarbun.main')}>
                            Главная
                        </NavbarItem>
                        <NavbarItem to={getNavigationsValue('sugarbun.menu')}>
                            Меню
                        </NavbarItem>
                        <NavbarItem
                            to={getNavigationsValue('sugarbun.constructor')}
                        >
                            Конструктор
                        </NavbarItem>
                    </Navbar>
                </div>
            </HeaderNav>
        </>
    )
}
export default Header
