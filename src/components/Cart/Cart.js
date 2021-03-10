import React from 'react';

const Cart = (props) => {
        const cart = props.cart;
        console.log(cart)
        let total=0;
        for(let i = 0; i <cart.length; i++){
            const product = cart[i];
            total = total+product.price;
        }
        let shipping = 0;
        if(total>20){
            shipping = 5.99;
        }
        else if(total>50){
            shipping = 4.99;
        }
        else if(total>100){
            shipping = 2.99;
        }

        const tax = (total / 10).toFixed(2);
        const grandTotal = (total +shipping+Number(tax)).toFixed(2);

        const formatNumber = (num) =>{
            const precision = num.toFixed(2)
            return Number(precision);
        }
    return (
        <div>
            <h2>order summary</h2>
            <h4>Items Orderd: {cart.length}</h4>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>tax:+vat :{tax}</small></p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <h4>Total :{grandTotal} </h4>
        </div>
    );
};

export default Cart;