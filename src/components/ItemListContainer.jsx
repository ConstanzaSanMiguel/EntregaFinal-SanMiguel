import '../css/itemlist.css'

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className="productContainer">
                <h1>{greeting}</h1>
                <div>Loading products...</div>
            </div>
        </>
    )
}

export default ItemListContainer