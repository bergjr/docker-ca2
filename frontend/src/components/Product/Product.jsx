import React from "react";
import ModalOverlayProduct from "./ModalOverlayProduct";
import { Backdrop } from "@mui/material";
import useProductContext from "../../context/ProductContext/useProductContext";
import { useCartContext } from "../../context/CartContext/useCartContext";

const Product = () => {
  const {
    showProductModal,
    selectedProduct,
    closeModal,
    quantity,
    changeQuantity,
  } = useProductContext();
  const { addToCart } = useCartContext();
  return (
    /* 1. Backdrop component from Material-UI is used to create a modal overlay effect when the product modal is open.*/
    <>
      <Backdrop
        open={showProductModal}
        sx={{ zIndex: "99999" }}
        transitionDuration={500}
        onClick={closeModal}
      >
        {/* 2. The ModalOverlayProduct component is conditionally rendered based on whether a product is selected. It receives several props: onAdd (a function to add the product to the cart), onChange (a function to change the quantity), quantity (the current quantity of the product), product (the selected product details), and closeModal (a function to close the modal). */}
        {selectedProduct && (
          <ModalOverlayProduct
            onAdd={addToCart}
            onChange={changeQuantity}
            quantity={quantity}
            product={selectedProduct}
            closeModal={closeModal}
          />
        )}
      </Backdrop>
    </>
  );
};

export default Product;
