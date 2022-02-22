import React from 'react';

const Product = ({ product, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h3>
          {product.title}
          <p>
            $
            {' '}
            {product.price}
          </p>
        </h3>
        <p>{product.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
  );
}

export default Product;