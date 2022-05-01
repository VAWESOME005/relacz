import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const navigate = useNavigate()
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className = "subtotal">
            <CurrencyFormat 
                renderText ={(value) => (
                <>
                    <p>
                        Subtotal ({cart?.length} items) : <strong>{value}</strong>
                        <small className = "subtotal__gift">
                            <input type = "checkbox"/> This order contains a gift
                        </small>
                    </p>
                </>

            )}

            decimalScale = {2}
            value = {getCartTotal(cart)}
            displayType = {"text"}
            thousandSeparator={true}
            prefix = {"$"}
            />

            <button onClick = {e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
