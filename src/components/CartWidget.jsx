
const CartWidget = () => {
    const numeroProductos = 5;

    return (
        <div className="cart-widget">
            <li className="shopping-icon">
                <i className="fas fa-shopping-cart"></i>
            </li>
            {numeroProductos >= 0 && (
                <div className="cart-count">{numeroProductos}</div>
            )}
        </div>
    );
}

export default CartWidget