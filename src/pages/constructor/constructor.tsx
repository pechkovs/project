import React from 'react'
import ConstructorCard from '../../components/card/order-card/constructor-card'
import OrderCard from '../../components/card/order-card/order-card'
import { CardPlace } from '../../components/card/order-card.style.ts'
import ConstructorItems from '../../_data_/constructoritems'
import {
    // BlockItem,
    // BlockItemPrice,
    // BlockItemTitle,
    // BlockItemTxt,
    //BlockItemPrice,
    //BlockItemTitle,
    //BlockItemTxt,
    ConstructorPageBody,
    ConstructorPageHeading,
    ConstructorPageP,
    ConstructorPageTxt,
    ContainerMain,
    // ItemImg,
    //ItemImg,
    // ItemsBlock,
} from './constructor.style'

const ConstructorPage = () => {
    return (
        <>
            <span>
                <ConstructorPageBody
                    src={`${__webpack_public_path__}remote-assets/About_us_bgr1.jpeg`}
                    alt="ConstructorPageBodyBgr"
                />
            </span>

            <ConstructorPageTxt>
                <ConstructorPageHeading>
                    <h1>Давайте закажем торт!</h1>
                </ConstructorPageHeading>
                <ConstructorPageP>
                    <p>Заполните форму ниже и нажмите кнопку отправить.</p>
                    <p>Мы обработаем вашу заявку и перезвоним в течение дня.</p>
                </ConstructorPageP>
            </ConstructorPageTxt>

            <ConstructorPageTxt>
                <ConstructorPageHeading>
                    <h1>Примеры начинок</h1>
                </ConstructorPageHeading>
            </ConstructorPageTxt>

            <CardPlace>
                <ConstructorCard
                    title={'Айли'}
                    imageName="AiLi.png"
                    description={'Ванильный бисквит'}
                    description1={'Ванильная пропитка'}
                    description2={'Сливочно-сырный крем'}
                    description3={'Клубничная прослойка'}
                ></ConstructorCard>
                <ConstructorCard
                    title={'Шоколадный с солёной карамелью'}
                    imageName="Chocolate_with_salted caramel.png"
                    description={'Шоколадный бисквит'}
                    description1={'Солёная карамель'}
                    description2={'Сливочно-сырный крем'}
                    description3={'Орехи и мягкий шоколадный ганаш'}
                ></ConstructorCard>
                <ConstructorCard
                    title={'Наполеон'}
                    imageName="Napoleon.png"
                    description={'Тонкие коржи из слоеного теста'}
                    description1={'Пропитка из заварного крема на сливках'}
                    description2={''}
                    description3={''}
                ></ConstructorCard>
                <ConstructorCard
                    title={'Павлова'}
                    imageName="Pavlova.png"
                    description={
                        'Воздушные коржи из меренги с мягкой серединкой'
                    }
                    description1={'Начинка апельсин-маракуйя'}
                    description2={'Нежный сливочно-сырный крем'}
                    description3={''}
                ></ConstructorCard>
                <ConstructorCard
                    title={'Чизкейк Сникерс'}
                    imageName="Cheesecake_Snickers.png"
                    description={'Песочно-шоколадная основа'}
                    description1={'Сырный слой'}
                    description2={'Соленая карамель с орехами'}
                    description3={'Покрыт слоем настоящего шоколада'}
                ></ConstructorCard>
                <ConstructorCard
                    title={'Классический медовый с клюквой'}
                    imageName="Classic_honey.png"
                    description={'Нежные медовые коржи'}
                    description1={
                        'Небольшая кислинка в виде клюквенной прослойки'
                    }
                    description2={'Ванильное суфле'}
                    description3={'Сметанный крем'}
                ></ConstructorCard>
            </CardPlace>

            {/* <ContainerMain>
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
            <ContainerMain>
                <ConstructorItems />
            </ContainerMain> */}
        </>
    )
}
export default ConstructorPage
