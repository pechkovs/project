import React from 'react'
import { render } from '@testing-library/react'
import MenuPage from './menu'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from './../../_data_/store/store'
import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const onSubmit = jest.fn()

const server = setupServer(
    rest.post('/menu/submit', (req, res) => {
        console.log('/menu/submit')
        onSubmit()
        return res()
    }),
    rest.get('/menu/cakeitems', (req, res, ctx) => {
        return res(
            ctx.json({
                cakes: [
                    {
                        title: 'АйЛи',
                        image: 'AiLi.png',
                        description: 'Ванильный бисквит',
                        description1: 'Ванильная пропитка',
                        description2: 'Сливочно-сырный крем',
                        description3: 'Клубничная прослойка',
                        price: '1600',
                        id: 'cake',
                    },
                    {
                        title: 'Лавандовый',
                        image: 'Lavender.png',
                        description: 'Лавандовый бисквит',
                        description1: 'Черничная пропитка',
                        description2: 'Сливочно-сырный крем',
                        description3: 'Черничный соус',
                        price: '1700',
                        id: 'cake1',
                    },
                    {
                        title: 'Шоколадный с солёной карамелью  ',
                        image: 'Chocolate_with_salted caramel.png',
                        description: 'Шоколадный бисквит',
                        description1: 'Сливочно-сырный крем',
                        description2: 'Соленая карамель',
                        description3: 'Орехи и мягкий шоколадный ганаш',
                        price: '1700',
                        id: 'cake2',
                    },
                    {
                        title: 'Шоколадный трюфель',
                        image: 'Chocolate_truffle.png',
                        description: 'Шоколадный бисквит',
                        description1: 'Ванильная пропитка',
                        description2: 'Мягкий шоколадный ганаш',
                        description3: '',
                        price: '1700',
                        id: 'cake3',
                    },
                    {
                        title: 'Красный бархат с вишней',
                        image: 'Red_velvet.png',
                        description: 'Бисквит красный бархат',
                        description1: 'Ягодная пропитка',
                        description2: 'Сливочно-сырный крем',
                        description3: 'Вишневый соус с кусочками вишни',
                        price: '1600',
                        id: 'cake4',
                    },
                    {
                        title: 'Фисташка-малина',
                        image: 'Pistachio-raspberry.png',
                        description: 'Фисташковый бисквит',
                        description1: 'Сливочно-сырный крем',
                        description2: 'Малиновый соус',
                        description3: '',
                        price: '1600',
                        id: 'cake5',
                    },
                    {
                        title: 'Морковный с облепиховой прослойкой',
                        image: 'Carrot.png',
                        description: 'Пряный морковный бисквит с орехами',
                        description1: 'Облепиховая пропитка',
                        description2: 'Сливочно-сырный крем',
                        description3: 'Облепиховый соус',
                        price: '1700',
                        id: 'cake6',
                    },
                    {
                        title: 'Груша-дорблю',
                        image: 'Pear-dorblu.png',
                        description: 'Ванильный бисквит',
                        description1: 'Томлёная с ванилью груша',
                        description2: 'Сливочно-сырный крем',
                        description3: 'Кедровые орехи',
                        price: '1700',
                        id: 'cake7',
                    },
                    {
                        title: 'Шоколадный медовый',
                        image: 'Chocolate_honey.jpeg',
                        description: 'Шоколадные медовые коржи',
                        description1: 'Ванильное суфле',
                        description2:
                            'Сметанный крем с добавлением грецких орехов',
                        description3: '',
                        price: '1600',
                        id: 'cake8',
                    },
                    {
                        title: 'Наполеон',
                        image: 'Napoleon.png',
                        description: 'Тонкие коржи из слоеного теста',
                        description1: 'Пропитка из заварного крема на сливках',
                        description2: '',
                        description3: '',
                        price: '1700',
                        id: 'cake9',
                    },
                    {
                        title: 'Тропический',
                        image: 'Tropical.png',
                        description: 'Кокосовый бисквит',
                        description1: 'Пропитка на кокосовом молоке',
                        description2: 'Пюре из манго и маракуйи',
                        description3: 'Сливочно-сырный крем с кокосовым муссом',
                        price: '1700',
                        id: 'cake10',
                    },
                    {
                        title: 'Маковый',
                        image: 'Poppy.png',
                        description: 'Маковый бисквит',
                        description1: 'Пропитка абрикос-маракуйя',
                        description2: 'Сливочно-сырный крем',
                        description3: 'Прослойка из абрикоса и маракуйи',
                        price: '1700',
                        id: 'cake11',
                    },
                    {
                        title: 'Павлова',
                        image: 'Pavlova.png',
                        description:
                            'Воздушные коржи из меренги с мягкой серединкой',
                        description1: 'Начинка апельсин-маракуйя',
                        description2: 'Сливочно-сырный крем',
                        description3: '',
                        price: '1800',
                        id: 'cake12',
                    },
                    {
                        title: 'Чизкейк Нью-Йорк с солёной карамелью',
                        image: 'New-york-cheesecake_with_salted_caramel.png',
                        description: 'Песочная основа по оригинальному рецепту',
                        description1:
                            'Нежный сырный слой под слоем тягучей соленой карамели',
                        description2: '',
                        description3: '',
                        price: '1600',
                        id: 'cake13',
                    },
                    {
                        title: 'Чизкейк Нью-Йорк',
                        image: 'New-york-cheesecake.jpeg',
                        description: 'Песочная основа по оригинальному рецепту',
                        description1: 'Нежный сырный слой',
                        description2: '',
                        description3: '',
                        price: '1500',
                        id: 'cake14',
                    },
                    {
                        title: 'Чизкейк Сникерс',
                        image: 'Cheesecake_Snickers.png',
                        description: 'Песочно-шоколадная основа',
                        description1: 'Сырный слой',
                        description2: 'Соленая карамель с орехами',
                        description3: 'Покрыт слоем настоящего шоколада',
                        price: '1600',
                        id: 'cake15',
                    },
                    {
                        title: 'Баноффи',
                        image: 'Banoffi.png',
                        description: 'Песочная основа',
                        description1:
                            'Банановые кольца под слоем соленой карамели',
                        description2: 'Воздушный крем-чиз',
                        description3: '',
                        price: '1600',
                        id: 'cake16',
                    },
                    {
                        title: 'Классический медовый с клюквой',
                        image: 'Classic_honey.png',
                        description: 'Недные медовые коржи',
                        description1:
                            'Небольшая кислинка в виде клюквенной прослойки',
                        description2: 'Ванильное суфле',
                        description3: 'Сметанный крем',
                        price: '1600',
                        id: 'cake17',
                    },
                ],

                desserts: [
                    {
                        title: 'Капкейк',
                        image: 'Kapkeik.png',
                        description:
                            'Нежный кекс с начинкой и кремовой шапочкой',
                        price: '160',
                        id: 'des',
                    },
                    {
                        title: 'Макарон',
                        image: 'Makaron.png',
                        description:
                            'Классический французский десерт из двух миндальных крышек и мягкой начинки',
                        price: '100',
                        id: 'des1',
                    },
                    {
                        title: 'Десерт Павлова',
                        image: 'Pavlova_desert.png',
                        description: 'Безе с мягкой сердцевиной внутри',
                        price: '240',
                        id: 'des2',
                    },
                    {
                        title: 'Трюфель',
                        image: 'Truffel.png',
                        description: 'Нежные конфеты на бельгийском шоколаде',
                        price: '80',
                        id: 'des3',
                    },
                    {
                        title: 'Кейк-ппс',
                        image: 'Keyk-pops.png',
                        description:
                            'Любимое лакомство детей. Пирожное картошка в новом исполнении',
                        price: '100',
                        id: 'des4',
                    },
                    {
                        title: 'Эклер',
                        image: 'Ekler.png',
                        description:
                            'Десерт на основе заварного теста с заварным кремом внутри',
                        price: '160',
                        id: 'des5',
                    },
                ],
            })
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('MenuPage', () => {
    window.alert = jest.fn()
    it('MenuPage', () => {
        render(
            <Provider store={store}>
                <MenuPage />
            </Provider>
        )
    })
})
