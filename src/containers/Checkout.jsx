import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import AppContext from '../context/AppContext'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import '../styles/components/Checkout.css'

const Checkout = () => {
  const { state: { cart }, removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal  = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  const deleteIcon = 30;
  const red = '#d42222'

  return (
    <>
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        {cart.map((item, index) => (
          <title key={index}>Checkout - {item.title}</title>
        ))}
        <meta name="description" content="Checkout" />
      </Helmet>
    </div>
    <div className='Checkout'>
      <div className='Checkout-content'>
        {cart.length > 0 ? <h3>Lista de Pedidos: {cart.length}</h3> : <h3>Sin pedidos...</h3>}
        {cart.map((item, index) => (
          <div className='Checkout-item' key={index}>
            <div className='Checkout-element'>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>$ {item.price}</p>
            </div>
            <button type='button' className='Checkout-button' onClick={handleRemove(item)}>
              <RiDeleteBack2Fill color={red} size={deleteIcon} />
            </button>
          </div>
        ))}
      </div>
      <div className='Checkout-sidebar'>
        <h3>{`Precio Total: $ ${handleSumTotal().toFixed(2)}`}</h3>
        <Link to='/checkout/information'>
        <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Checkout