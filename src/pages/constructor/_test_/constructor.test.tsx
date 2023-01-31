import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import ConstructorPage from '../constructor'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'
import { store } from '../../../_data_/store/store'
import 'whatwg-fetch'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import user from '@testing-library/user-event'

const onSubmit = jest.fn()

const server = setupServer(
    rest.post('/constructor/submit', (req, res) => {
        console.log('/constructor/submit')
        onSubmit()
        return res()
    }),
    rest.get('/constructor/formitems', (req, res, ctx) => {
        return res(
            ctx.json({
                ingredients: [
                    {
                        name: 'Ванильный с клубникой',
                        id: 'ing1',
                    },
                    {
                        name: 'Лавандовый',
                        id: 'ing2',
                    },
                    {
                        name: 'Шоколадный с солёной карамелью, орехами и шоколадом',
                        id: 'ing3',
                    },
                    {
                        name: 'Шоколадный трюфель',
                        id: 'ing4',
                    },
                    {
                        name: 'Красный бархат с вишней',
                        id: 'ing5',
                    },
                    {
                        name: 'Фисташка-малина',
                        id: 'ing6',
                    },
                    {
                        name: 'Морковный с облепиховой прослойкой',
                        id: 'ing7',
                    },
                    {
                        name: 'Груша-дорблю',
                        id: 'ing8',
                    },
                    {
                        name: 'Классический медовый с клюквойм',
                        id: 'ing9',
                    },
                    {
                        name: 'Шоколадный медовый',
                        id: 'ing10',
                    },
                    {
                        name: 'Наполеон',
                        id: 'ing11',
                    },
                    {
                        name: 'Тропический',
                        id: 'ing12',
                    },
                    {
                        name: 'Маковый',
                        id: 'ing13',
                    },
                    {
                        name: 'Павлова',
                        id: 'ing14',
                    },
                    {
                        name: 'Чизкейк Нью-Йорк',
                        id: 'ing15',
                    },
                    {
                        name: 'Чизкейк Нью-Йорк с соленой карамелью',
                        id: 'ing16',
                    },
                    {
                        name: 'Чизкейк Сникерс',
                        id: 'ing17',
                    },
                    {
                        name: 'Баноффи',
                        id: 'ing18',
                    },
                ],

                cakeshapes: [
                    {
                        name: 'Круг',
                        id: 'sh1',
                    },
                    {
                        name: 'Квадрат',
                        id: 'sh2',
                    },
                    {
                        name: 'Прямоугольник',
                        id: 'sh3',
                    },
                    {
                        name: 'Овал',
                        id: 'sh4',
                    },
                    {
                        name: 'Сложной формы',
                        id: 'sh5',
                    },
                ],

                cakesweights: [
                    {
                        name: '1.5 кг',
                        id: 'cw1',
                    },
                    {
                        name: '2 кг',
                        id: 'cw2',
                    },
                    {
                        name: '3 кг',
                        id: 'cw3',
                    },
                    {
                        name: '4 кг',
                        id: 'cw4',
                    },
                    {
                        name: '5 кг',
                        id: 'cw5',
                    },
                    {
                        name: '6 кг',
                        id: 'cw6',
                    },
                    {
                        name: '7 кг',
                        id: 'cw8',
                    },
                ],
            })
        )
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('ConstructorPage', () => {
    window.alert = jest.fn()
    it('ConstructorPage', () => {
        render(
            <Provider store={store}>
                <ConstructorPage />
            </Provider>
        )

        expect(screen.getByText('Давайте закажем торт!')).toBeInTheDocument()
    })
})

describe('Form2 items', () => {
    it('onSubmit вызывается когда все поля прошли валидацию', async () => {
        render(
            <Provider store={store}>
                <ConstructorPage />
            </Provider>
        )

        await screen.findByText('Выберете форму торта:')

        const dropdown1 = screen.getByRole('combobox', {
            name: /выберете форму торта:/i,
        })
        await user.selectOptions(
            dropdown1,
            within(dropdown1).getByRole('option', { name: 'Круг' })
        )

        const dropdown2 = screen.getByRole('combobox', {
            name: /Выберете размер торта:/i,
        })
        await user.selectOptions(
            dropdown2,
            within(dropdown2).getByRole('option', { name: '1.5 кг' })
        )

        const checkbox = screen.getByRole('checkbox', {
            name: /Ванильный с клубникой/i,
        })
        await user.click(checkbox)

        const textfield = screen.getByRole('textbox', {
            name: /Пожелания по оформлению/i,
        })
        await user.type(textfield, 'Белый торт с цифрами, на день рождения')

        const file = new File(['hello'], 'hello.png', { type: 'image/png' })

        const input = screen.getByLabelText(/Прикрепите примеры оформления/i)
        await user.upload(input, file)

        await user.type(getFioField(), 'Ivan Ivanov')
        await screen.findByDisplayValue('Ivan Ivanov')

        await user.type(getEmailField(), 'ivan.ivanov@gmail.com')
        await screen.findByDisplayValue('ivan.ivanov@gmail.com')

        await user.type(getPhoneField(), '79179999999')
        await screen.findByDisplayValue('79179999999')

        const button = screen.getByText('Отправить')
        await user.click(button)

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledTimes(1)
        })
        await waitFor(() => {
            expect(window.alert).toHaveBeenCalledWith(
                'Благодарим за отправку данных!'
            )
        })
    })
})

function getFioField() {
    return screen.getByRole('textbox', {
        name: /ФИО*/i,
    })
}

function getEmailField() {
    return screen.getByRole('textbox', {
        name: /E-mail*/i,
    })
}

function getPhoneField() {
    return screen.getByRole('spinbutton', {
        name: /телефон\*/i,
    })
}
