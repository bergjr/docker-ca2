import React from 'react';
import ModalCart from './ModalCart';
// import Backdrop from 'UI/Backdrop/Backdrop';
import { Backdrop } from '@mui/material';
import { useCartContext } from '../../context/CartContext/useCartContext';

const Cart = () => {
    const { showCart, openCartHandler } = useCartContext();
    
    return (
        <>
            <Backdrop open={showCart} onClick={openCartHandler} sx={{zIndex: "99999"}}>
                <ModalCart />
            </Backdrop>
        </>
    );
}

export default Cart;

