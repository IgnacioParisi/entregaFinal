import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from '../../contexts/CartContext';
import cartIcon from '../../assets/shopping-cart.png'
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="cart-container">
            <Link to={'/cart'} style={{ display: totalQuantity() > 0 ? 'block' : 'none' }}>
                <img src={ cartIcon } alt="Cart icon" style={{paddingRight: "4px"}}/>
                <Badge pill bg="light" text="dark">{ totalQuantity() }</Badge>
            </Link>
        </div>
    )
}