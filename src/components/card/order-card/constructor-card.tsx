import React from 'react'
import { CardItem, CardTitle, CardTxt } from '../../card/order-card.style.ts'
type ConstructorCardProps = {
    title: string
    imageName: string
    description: string
    description1: string
    description2: string
    description3: string
}

const ConstructorCard: React.FC<ConstructorCardProps> = (props) => {
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
        </CardItem>
    )
}

export default ConstructorCard
