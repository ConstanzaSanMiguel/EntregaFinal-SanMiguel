
import Item from './Item.jsx'

const ItemList = ({ products }) => {
    console.log(products)

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    )
                }
                )
            }
        </>
    )
}

export default ItemList