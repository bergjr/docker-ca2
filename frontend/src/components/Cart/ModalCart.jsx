import React from "react";
import styles from "./ModalCart.module.scss";
import { Button, IconButton } from "@mui/material";
import AddCircle from "@mui/icons-material/Add";
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCartContext } from "../../context/CartContext/useCartContext";
import { useAuth } from "@/context/AuthContext/AuthContext";


/** ModalCart.jsx
 * This component represents the modal that appears when the user clicks on the shopping cart icon in the NavBar. It displays the items in the cart, allows users to adjust quantities, and shows the total price. Users can also proceed to checkout from this modal.
 */

const ModalCart = () => {
  const { cart, totalToPay, openCartHandler, updateQuantity, checkout} = useCartContext();
  const { user } = useAuth();
  
  return (
    <div className={styles.cart} onClick={e => e.stopPropagation()}> {/* Prevents the click event from propagating to the Backdrop, allowing users to interact with the cart without closing it */}
      <div className={styles["box-top"]}>
        <h2>Your Shopping Cart ({cart?.length || 0})</h2>
        <IconButton aria-label="close cart" onClick={openCartHandler} className={styles.closeButton}>
          <CloseIcon sx={{color: "#ffffff"}}/>
        </IconButton>
      </div>
      <ul className={styles["box-list"]}>
        {cart.map((product) => { // Maps through the cart and displays each item
          let img = product.image || "";    // Loads image of each item
          return (
            <li key={product.id}>
              <div className={styles["img-container"]}>
                <img src={img} alt={product.title} />
              </div>
              <div className={styles["info-container"]}>
                <h3>{product.title}</h3>
                <p className={styles.price}>
                  € {(product.quantity * product.price).toFixed(2)}
                </p>
                <div className={styles["buttons-container"]}>
                  <IconButton aria-label="add" onClick={() => updateQuantity(product.id, 1)}>
                    <AddCircle color="success" />
                  </IconButton>
                  <p>{product.quantity}</p>
                  <IconButton aria-label="remove" onClick={() => updateQuantity(product.id, -1)}>
                    <RemoveIcon sx={{color: "red"}} />
                  </IconButton>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={styles['box-bottom']}>
        <h2>Total: € {totalToPay.toFixed(2)}</h2>
        <Button onClick={checkout} color="success" disabled={(cart.length < 1 || !user?.email)} variant="contained">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default ModalCart;
