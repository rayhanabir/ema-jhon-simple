import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
const product = (props) => {
    // console.log(props)
    const {name, img, seller, stock,price}= props.product;
    return (
        <div className='product'>
           <div>
           <img src={img} alt=""/>
           </div>

           <div>
           <h3 className='product-name'>{name}</h3>
           <br/>
           <p><small>by : {seller}</small></p>
           <h3>${price}</h3>
           <p>available stock: {stock}</p>
            <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}>
                <FontAwesomeIcon icon={faShoppingCart} />Add To Cart</button>

           </div>
        </div>
    );
};

export default product;