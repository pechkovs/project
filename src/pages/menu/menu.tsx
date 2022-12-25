import React from 'react'
import OrderCard from '../../components/card/order-card/order-card'
import Category from '../../components/category/category'
import { CategoryPage } from '../../components/category/category.style'
import { CardPlace } from '../../components/card/order-card.style.ts'
import { ConstructorPageBody } from '../constructor/constructor.style'

const MenuPage = () => {
    return (
        <>
            <span>
                <ConstructorPageBody
                    src={`${__webpack_public_path__}remote-assets/About_us_bgr1.jpeg`}
                    alt="ConstructorPageBodyBgr"
                />
            </span>
            <span>
                <CategoryPage>
                    <Category title={'Торты'}></Category>
                </CategoryPage>

                <CardPlace>
                    <OrderCard
                        title={'АйЛи'}
                        imageName="AiLi.png"
                        description={'Ванильный бисквит'}
                        description1={'Ванильная пропитка'}
                        description2={'Сливочно-сырный крем'}
                        description3={'Клубничная прослойка'}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Лавандовый'}
                        imageName="Lavender.png"
                        description={'Лавандовый бисквит'}
                        description1={'Черничная пропитка'}
                        description2={'Сливочно-сырный крем'}
                        description3={'Черничный соус'}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Шоколадный с солёной карамелью'}
                        imageName="Chocolate_with_salted caramel.png"
                        description={'Шоколадный бисквит'}
                        description1={'Солёная карамель'}
                        description2={'Сливочно-сырный крем'}
                        description3={'Орехи и мягкий шоколадный ганаш'}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Шоколадный трюфель'}
                        imageName="Chocolate_truffle.png"
                        description={'Шоколадный бисквит'}
                        description1={'Ванильная пропитка'}
                        description2={'Мягкий шоколадный ганаш'}
                        description3={''}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Красный бархат с вишней'}
                        imageName="Red_velvet.png"
                        description={'Бисквит «красный бархат»'}
                        description1={'Ягодная пропитка'}
                        description2={'Сливочно-сырный крем'}
                        description3={'Вишневый соус с кусочками вишни'}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Фисташка-малина'}
                        imageName="Pistachio-raspberry.png"
                        description={'Фисташковый бисквит'}
                        description1={'Сливочно-сырный крем'}
                        description2={'Малиновый соус'}
                        description3={''}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Морковный с облепиховой прослойкой'}
                        imageName="Carrot.png"
                        description={'Пряный морковный бисквит с орехами'}
                        description1={'Облепиховая пропитка'}
                        description2={'Сливочно-сырный крем'}
                        description3={'Облепиховый соус'}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Груша-добрлю'}
                        imageName="Pear-dorblu.png"
                        description={'Ванильный бисквит'}
                        description1={'Томленая с ванилью груша'}
                        description2={'Сливочно-сырный крем'}
                        description3={'Кедровые орехи'}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Шоколадный медовый'}
                        imageName="Chocolate_honey.jpeg"
                        description={'Шоколадный медовые коржи'}
                        description1={'Ванильное суфле'}
                        description2={
                            'Сметанный крем с добавление грецких орехов'
                        }
                        description3={''}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Наполеон'}
                        imageName="Napoleon.png"
                        description={'Тонкие коржи из слоеного теста'}
                        description1={'Пропитка из заварного крема на сливках'}
                        description2={''}
                        description3={''}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Тропический'}
                        imageName="Tropical.png"
                        description={'Кокосовый бисквит'}
                        description1={'Пропитка на кокосовом молоке'}
                        description2={
                            'Пюре из манго и маракуйи с кокосовым муссом'
                        }
                        description3={'Сливочно-сырный крем'}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Маковый'}
                        imageName="Poppy.png"
                        description={'Маковый бисквит'}
                        description1={'Пропитка абрикос-маракуйя'}
                        description2={'Прослойка из абрикоса и маракуйи'}
                        description3={'Сливочно-сырный крем'}
                        price={1700}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Павлова'}
                        imageName="Pavlova.png"
                        description={
                            'Воздушные коржи из меренги с мягкой серединкой'
                        }
                        description1={'Начинка апельсин-маракуйя'}
                        description2={'Нежный сливочно-сырный крем'}
                        description3={''}
                        price={1800}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Чизкейк Нью-Йорк с солёной карамелью'}
                        imageName="New-york-cheesecake_with_salted_caramel.png"
                        description={'Песочная основа по оригинальному рецепту'}
                        description1={
                            'Нежный сырный слой под слоем тягучей солёной карамели'
                        }
                        description2={''}
                        description3={''}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Чизккейк Нью-Йорк'}
                        imageName="New-york-cheesecake.jpeg"
                        description={'Песочная основа по оригинальному рецепту'}
                        description1={'Нежный сырный слой'}
                        description2={''}
                        description3={''}
                        price={1500}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Чизкейк Сникерс'}
                        imageName="Cheesecake_Snickers.png"
                        description={'Песочно-шоколадная основа'}
                        description1={'Сырный слой'}
                        description2={'Соленая карамель с орехами'}
                        description3={'Покрыт слоем настоящего шоколада'}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Баноффи'}
                        imageName="Banoffi.png"
                        description={'Песочная основа'}
                        description1={
                            'Банановые кольца по слоем соленой карамели'
                        }
                        description2={'Воздушный крем-чиз'}
                        description3={''}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Классический медовый с клюквой'}
                        imageName="Classic_honey.png"
                        description={'Нежные медовые коржи'}
                        description1={
                            'Небольшая кислинка в виде клюквенной прослойки'
                        }
                        description2={'Ванильное суфле'}
                        description3={'Сметанный крем'}
                        price={1600}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                </CardPlace>

                <CategoryPage>
                    <Category title={'Десерты'}></Category>
                </CategoryPage>
                <CardPlace>
                    <OrderCard
                        title={'Капкейк'}
                        imageName="Kapkeik.png"
                        description={
                            'Нежный кекс с начинкой и кремовой шапочкой'
                        }
                        description1={''}
                        description2={''}
                        description3={''}
                        price={160}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Макарон'}
                        imageName="Makaron.png"
                        description={
                            'Классический французский десерт из двух миндальных крышек и мягкой начинки'
                        }
                        description1={''}
                        description2={''}
                        description3={''}
                        price={100}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Павлова'}
                        imageName="Pavlova_desert.png"
                        description={'Безе с мягкой сердцевиной внутри'}
                        description1={''}
                        description2={''}
                        description3={''}
                        price={240}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Трюфель'}
                        imageName="Truffel.png"
                        description={'Нежные конфеты на бельгийском шоколаде'}
                        description1={''}
                        description2={''}
                        description3={''}
                        price={80}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Кейк-попс'}
                        imageName="Keyk-pops.png"
                        description={'Любимое лакомство детей'}
                        description1={'Пирожное картошка в новом исполнении'}
                        description2={''}
                        description3={''}
                        price={100}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                    <OrderCard
                        title={'Эклер'}
                        imageName="Ekler.png"
                        description={
                            'Десерт на основе заварного теста с заварным кремом внутри'
                        }
                        description1={''}
                        description2={''}
                        description3={''}
                        price={160}
                        onClick={function (): void {
                            throw new Error('Function not implemented.')
                        }}
                    ></OrderCard>
                </CardPlace>
            </span>
        </>
    )
}
export default MenuPage
