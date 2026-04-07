import { useState } from "react";
import ProductContext from "./ProductContext";
export default function ProductProvider({ children }) {
  const [showProductModal, setShowProductModal] = useState(false);
  // const [productsList, setProductsList] = useState(categories[0].products);
  
  const [selectedProduct, setSelectedProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  function selectProduct(product) {
    setShowProductModal(!showProductModal);
    setSelectedProduct(product);
  }

  function changeQuantity(newQuantity) {
    setQuantity((oldQuantity) => (oldQuantity += newQuantity));
  }

  function closeModal() {
    setShowProductModal(false);
    setQuantity(1);
  }

  return (
    <ProductContext.Provider
      value={{
        showProductModal,
        setShowProductModal,
        selectedProduct,
        setSelectedProduct,
        quantity,
        setQuantity,
        selectProduct,
        changeQuantity,
        closeModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
