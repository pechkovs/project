import React from 'react'
type CategoryProps = {
    title: string
}

const Category: React.FC<CategoryProps> = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Category
