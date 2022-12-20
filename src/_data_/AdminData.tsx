///import images from "./images";

const data = {
    user: {
        name: 'Владелец',
        ///img: images.avt,
    },
    summary: [
        {
            title: 'Продажи',
            value: '₽331.080',
            icon: 'akar-icons:shopping-bag',
        },
        {
            title: 'Заказы',
            value: '1760',
            icon: 'icon-park-outline:transaction-order', //width:48px;
        },
        {
            title: 'Прибьль',
            value: '₽156.860',
            icon: 'bi:coin',
        },
    ],
    checkPoints: {
        labels: [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь',
        ],
        data: [
            15.5, 12.4, 18.6, 17.3, 6.2, 13.6, 19.2, 11.7, 12.4, 7.44, 15.5,
            21.7,
        ],
    },
    topCustomers: {
        head: ['Покупатель', 'Всего заказов', 'Общая сумма'],
        body: [
            {
                username: 'Иван Иванов',
                order: 490,
                price: '₽983.940',
            },
            {
                username: 'Семен Слепаков',
                order: 250,
                price: '$12,251',
            },
            {
                username: 'Оля Веревкина',
                order: 120,
                price: '$10,840',
            },
            {
                username: 'Дима Грицко',
                order: 110,
                price: '$9,251',
            },
            {
                username: 'Даня Ёршь',
                order: 80,
                price: '$8,840',
            },
        ],
    },
    latestOrders: {
        header: ['ID Заказа', 'Покупатель', 'Обшая сумма', 'Дата', 'Статус'],
        body: [
            {
                orderId: '#OD1711',
                customer: 'john doe',
                totalPrice: '₽4.000',
                date: '17 ноября 2022',
                status: 'Одобрен',
            },
            {
                orderId: '#OD1712',
                customer: 'frank iva',
                totalPrice: '$400',
                date: '1 Jun 2022',
                status: 'pending',
            },
            {
                orderId: '#OD1713',
                customer: 'anthony baker',
                totalPrice: '$200',
                date: '27 Jun 2021',
                status: 'approved',
            },
            {
                orderId: '#OD1712',
                customer: 'frank iva',
                totalPrice: '$400',
                date: '1 Jun 2022',
                status: 'rejected',
            },
            {
                orderId: '#OD1713',
                customer: 'anthony baker',
                totalPrice: '$200',
                date: '27 Jun 2022',
                status: 'approved',
            },
        ],
    },
}

export default data
