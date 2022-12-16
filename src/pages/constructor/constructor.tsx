import React from 'react'
//import Form from '../../features/form/form'
import Form2 from '../../features/form/form2'
//import ConstructorItems from '../../_data_/constructoritems'
import {
    BlockItem,
    BlockItemPrice,
    BlockItemTitle,
    BlockItemTxt,
    ConstructorPageBody,
    ConstructorPageHeading,
    ConstructorPageP,
    ConstructorPageTxt,
    ContainerMain,
    ItemImg,
    ItemsBlock,
} from './constructor.style'

const ConstructorPage = () => (
    <>
        <ConstructorPageBody
            src={`${__webpack_public_path__}remote-assets/About_us_bgr1.jpeg`}
            alt="ConstructorPageBodyBgr"
        />
        <ConstructorPageTxt>
            <ConstructorPageHeading>
                <h1>Давайте закажем торт!</h1>
            </ConstructorPageHeading>
            <ConstructorPageP>
                <p>Заполните форму ниже и нажмите кнопку отправить.</p>
                <p>Мы обработаем вашу заявку и перезвоним в течение дня.</p>
            </ConstructorPageP>
            <Form2 />
        </ConstructorPageTxt>
        <ConstructorPageTxt>
            <ConstructorPageHeading>
                <h1>Примеры начинок</h1>
            </ConstructorPageHeading>
        </ConstructorPageTxt>
        <ContainerMain>
            <ItemsBlock>
                <BlockItem>
                    <ItemImg
                        src={`${__webpack_public_path__}remote-assets/cakes-examples/AiLi.png`}
                        alt="AiLi"
                    />
                    <BlockItemTitle>АйЛи</BlockItemTitle>
                    <BlockItemTxt>
                        <li>Ванильный бисквит</li>
                        <li>Ванильная пропитка</li>
                        <li>Сливочно-сырный крем</li>
                        <li>Клубничная прослойка</li>
                    </BlockItemTxt>
                    <BlockItemPrice>1600₽/кг</BlockItemPrice>
                </BlockItem>

                <BlockItem>
                    <ItemImg
                        src={`${__webpack_public_path__}remote-assets/cakes-examples/Lavender.png`}
                        alt="Lavender"
                    />
                    <BlockItemTitle>Лавандовый</BlockItemTitle>
                    <BlockItemTxt>
                        <li>Лавандовый бисквит</li>
                        <li>Черничная пропитка</li>
                        <li>Сливочно-сырный крем</li>
                        <li>Черничный соус</li>
                    </BlockItemTxt>
                    <BlockItemPrice>1700₽/кг</BlockItemPrice>
                </BlockItem>

                <BlockItem>
                    <ItemImg
                        src={`${__webpack_public_path__}remote-assets/cakes-examples/Chocolate_with_salted caramel.png`}
                        alt="Chocolate_with_salted caramel"
                    />
                    <BlockItemTitle>
                        Шоколадный с солёной карамелью
                    </BlockItemTitle>
                    <BlockItemTxt>
                        <li>Шоколадный бисквит</li>
                        <li>Сливочно-сырный крем</li>
                        <li>Соленая карамель</li>
                        <li>Орехи и мягкий шоколадный ганаш</li>
                    </BlockItemTxt>
                    <BlockItemPrice>1600₽/кг</BlockItemPrice>
                </BlockItem>
            </ItemsBlock>
        </ContainerMain>
        {/* <ContainerMain>
            <ConstructorItems />
        </ContainerMain> */}
    </>
)
export default ConstructorPage
