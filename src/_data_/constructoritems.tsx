/* eslint-disable react/prop-types */
import React from 'react'
import { BlockItem, ItemsBlock } from '../pages/constructor/constructor.style'

const data = [
    {
        category: 'Примеры начинок',
        items: [
            {
                id: '1',
                imgSrc: '/',
                name: 'АйЛи',
                description: 'Desc',
                price: '1600₽/кг',
            },
            {
                id: '2',
                imgSrc: '/',
                name: 'АйЛи',
                description: 'Desc',
                price: '1600₽/кг',
            },
            {
                id: '3',
                imgSrc: '/',
                name: 'АйЛи',
                description: 'Desc',
                price: '1600₽/кг',
            },
            {
                id: '4',
                imgSrc: '/',
                name: 'АйЛи',
                description: 'Desc',
                price: '1600₽/кг',
            },
            {
                id: '5',
                imgSrc: '/',
                name: 'АйЛи',
                description: 'Desc',
                price: '1600₽/кг',
            },
            {
                id: '6',
                imgSrc: '/',
                name: 'АйЛи',
                description: 'Desc',
                price: '1600₽/кг',
            },
        ],
    },
]

const ITEMS_PER_PAGE = 3

const loadItemPage = async (category, page) => {
    const curCategory = data.find((cat) => cat.category === category)

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                items: curCategory.items.slice(
                    page * ITEMS_PER_PAGE,
                    (page + 1) * ITEMS_PER_PAGE
                ),
                nextPage:
                    (page + 1) * ITEMS_PER_PAGE < curCategory.items.length,
            })
        }, 3000)
    })
}

const Item = ({ data }) => (
    <>
        <BlockItem>
            <h4>{data.name}</h4>
            <img src={data.imgSrc} alt="" />
            <p>{data.description}</p>
            <span>{data.price}</span>
        </BlockItem>
    </>
)

const Items = ({ category }) => {
    const [page, setPage] = React.useState(0)
    const [items, setItems] = React.useState([])
    const [hasNextPage, setHasNextPage] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        loadItemPage(category, page).then(({ items: nextItems, nextPage }) => {
            setItems((items) => items.concat(nextItems))
            setHasNextPage(nextPage)
            setLoading(false)
        })
    }, [page])

    const handleLoadMore = () => {
        setPage((page) => page + 1)
    }

    return (
        <div>
            {items.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <Item data={item} />
                //Элементы
            ))}

            {loading && <div>загрузка</div>}

            {!loading && hasNextPage && (
                <button onClick={handleLoadMore}>Загрузить еще</button>
            )}
        </div>
    )
}

export default function ConstructorItems() {
    return (
        <div>
            {data.map((category) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <ItemsBlock>
                        <Items category={category.category} />
                    </ItemsBlock>
                )
            })}
        </div>
    )
}
