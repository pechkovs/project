/* eslint-disable react/jsx-key */
import React from 'react'
import OrderCard from '../../components/card/order-card/order-card'
import { CardPlace } from '../../components/card/order-card/order-card.style'
import Category from '../../components/category/category'
import { CategoryPage } from '../../components/category/category.style'
import { ConstructorPageBody } from '../constructor/constructor.style'
import { useGetCakeitemsQuery } from '../../_data_/rtkcake/rtkcake'

const MenuPage = () => {
    const { data, isLoading, isError } = useGetCakeitemsQuery(null)

    if (isLoading) {
        return <>Данные еще не загружены</>
    }
    if (isError) {
        return <>Произошла ошибка, попробуйте обновить страницу</>
    }
    console.log(data)
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
                    {data.cakes.map((cake) => {
                        return (
                            <OrderCard
                                imageName={cake.image}
                                onClick={function (): void {
                                    throw new Error('Function not implemented.')
                                }}
                                title={cake.title}
                                description={cake.description}
                                description1={cake.description1}
                                description2={cake.description2}
                                description3={cake.description3}
                                price={cake.price}
                            ></OrderCard>
                        )
                    })}
                </CardPlace>

                <CategoryPage>
                    <Category title={'Десерты'}></Category>
                </CategoryPage>
                <CardPlace>
                    {data.desserts.map((dessert) => {
                        return (
                            <OrderCard
                                imageName={dessert.image}
                                onClick={function (): void {
                                    throw new Error('Function not implemented.')
                                }}
                                title={dessert.title}
                                description={dessert.description}
                                description1={dessert.description1}
                                description2={dessert.description2}
                                description3={dessert.description3}
                                price={dessert.price}
                            ></OrderCard>
                        )
                    })}
                </CardPlace>
            </span>
        </>
    )
}
export default MenuPage
