import React, { useState, useEffect } from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { getCartTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@mui/material';
import axios from './axios'
function Payment() {
    const [{cart, user}, dispatch] = useStateValue()
    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setSucceeded] = useState(false)
    const [processing, setProcessing] = useState('')
    const [clientSecret, setClientSecret] = useState(true)
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate()

    useEffect(() => {
    
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    console.log('THE SECRET IS...', clientSecret)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent is basically the payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            navigate.replace('/orders')
        })
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")

    }
    return (
        <div className='payment'>
            <div className = "payment__container">
                <h1>
                    Checkout (<Link to = "/checkout" style = {{color: 'blue'}}>{cart?.length} items</Link>)
                </h1>
                <div className ="payment__section">
                    <div className = "payment__title">
                        <h3>Delivery Address</h3>
                    </div>

                    <div className = "payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className ="payment__section">
                    <div className = "payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className = "payment__items">
                        {cart.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title= {item.title}
                                image= {item.image}
                                price = {item.price}
                                rating = {item.rating} 
                            />
                        ))}
                    </div>
                </div>

                <div className ="payment__section">
                    <div className = "payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className = "payment__details">
                        <form onSubmit = {handleSubmit}>
                            <CardElement className = 'payment__input'onChange = {handleChange}/>
                            <div className = "payment__priceContainer">
                                 <CurrencyFormat 
                                    renderText ={(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>
                                        </>

                                )}

                                decimalScale = {2}
                                value = {getCartTotal(cart)}
                                displayType = {"text"}
                                thousandSeparator={true}
                                prefix = {"$"}
                          />
                          <Button className ='payment__button' disabled = {processing || disabled || succeeded}>
                              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                          </Button>
                            </div>

                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Payment
