import React from 'react'
import Item from './Item.jsx'
import Loader from './Loader.jsx'
import '../css/itemlist.css'

const ItemList = ({ products }) => {
    return (
        <>
            {
                products.length <= 0 ? <Loader /> : <div className='productStyle' >
                    {
                        products.map((product) => {
                            return (
                                <Item
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    image={product.image}
                                    price={product.price}
                                />
                            )
                        })
                    }
                </div>
            }
        </>
    )
}

export default React.memo(ItemList)