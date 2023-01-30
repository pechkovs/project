import React from 'react'
import {
    CardItem,
    CardTitle,
    CardTxt,
    CardPrice,
    CardClick,
} from './order-card.style'

type OrderCardProps = {
    title: string
    imageName: string
    description: string
    description1: string
    description2: string
    description3: string
    price: number
    onClick: () => void
}

const OrderCard: React.FC<OrderCardProps> = (props) => {
    return (
        <CardItem>
            <CardTitle>
                <h4>{props.title}</h4>
            </CardTitle>
            <img
                src={`${__webpack_public_path__}remote-assets/cakes-examples/${props.imageName}`}
            />

            <CardTxt>
                <p>{props.description}</p>
                <p>{props.description1}</p>
                <p>{props.description2}</p>
                <p>{props.description3}</p>
            </CardTxt>
            <CardPrice>
                <p>{props.price} рублей</p>
            </CardPrice>
            <CardClick>Заказать</CardClick>
        </CardItem>
    )
}

export default OrderCard
