import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { NotFoundAnimation } from '../../_data_/animations'
import { Components_404, H1_TXT_404, H2_TXT_404, Player_404 } from './404.style'
import { getNavigationsValue } from '@ijl/cli'
import ButtonItem from '../../components/button/button'

const NotFoundPage = () => {
    return (
        <>
            <Components_404>
                <Player_404>
                    <Player
                        autoplay
                        loop
                        src={NotFoundAnimation}
                        style={{
                            height: '300px',
                            width: '300px',
                        }}
                    ></Player>
                    <H1_TXT_404>404</H1_TXT_404>
                    <H2_TXT_404>Ой, мы не можем найти эту страницу!</H2_TXT_404>
                    <ButtonItem to={getNavigationsValue('sugarbun.main')}>
                        Вернуться на главную
                    </ButtonItem>
                </Player_404>
            </Components_404>
        </>
    )
}

export default NotFoundPage
