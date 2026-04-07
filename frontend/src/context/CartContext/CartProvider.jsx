import { useState } from "react";
import CartContext from "./CartContext";
import useProductContext from "../ProductContext/useProductContext";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState(
    "Product added to the cart",
  );
  const { closeModal, quantity, setQuantity } = useProductContext();

  /* The TotalToPay calculates how much each product in the cart costs by multiplying the price of each product by its quantity. */
  const totalToPay = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  /* 1. The openCartHandler function is responsible for toggling the visibility of the cart. It uses the setShowCart function to update the showCart state, which determines whether the cart is displayed or hidden. When called, it will either show or hide the cart based on its current state. */
  function openCartHandler() {
    setShowCart(!showCart);
  }

  /* 2. The checkout function is responsible for handling the checkout process. It sets a success message in the snack bar, shows the snack bar, hides the cart, and clears the cart array. This simulates a successful payment and order completion. */
  function checkout() {
    setSnackBarMessage("Payment accepted. Have a nice meal!");
    setShowSnackBar(true);
    setShowCart(false);
    setCart([]);
  }

  /* 3. The closeSnackBar function is a simple function that sets the showSnackBar state to false, effectively hiding the snack bar when called. This allows the user to dismiss the snack bar after seeing the message. */
  function closeSnackBar() {
    setShowSnackBar(false);
  }

  // The addToCart function is responsible for adding a new product to the cart. It first checks if the product already exists in the cart using the some method. If the product does not exist, it adds the new product to the cart with the specified quantity. If the product already exists, it updates the quantity of that product in the cart by iterating through the cart and incrementing the quantity of the matching product. It also sets a snack bar message and shows the snack bar to inform the user that a product has been added to the cart. Finally, it closes the product modal.
  function addToCart(newProduct) {
    console.log("Adding to cart:", newProduct);

    // 1. Verificamos se o produto existe usando consistentemente o 'id'
    const productExist = cart.find((product) => product.id === newProduct.id);
    console.log("Product exists in cart:", !!productExist);
    // Gerenciamento do SnackBar e Modal
    if (snackBarMessage !== "Product added to the cart") {
      setSnackBarMessage("Product added to the cart");
    }
    setShowSnackBar(true);
    closeModal();

    if (!productExist) {
      // Adiciona novo item ao carrinho
      setCart((oldCart) => [...oldCart, { ...newProduct, quantity: quantity }]);
    } else {
      // 2. Atualiza a quantidade de forma IMUTÁVEL
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          // Criamos um NOVO objeto com a quantidade somada
          return { ...product, quantity: product.quantity + quantity };
        }
        return product;
      });
      setCart(updatedCart);
    }

    // 3. Resetamos a quantidade local após adicionar
    setQuantity(1);
  }

  const updateQuantity = (productId, amount) => {
    const updatedCart = cart
      .map((product) => {
        if (product.id === productId) {
          // Finds the product in the cart that matches the provided productId
          const newQuantity = product.quantity + amount; // Calculates the new quantity by adding the amount (which can be positive or negative) to the current quantity
          if (newQuantity < 1) return null; // If the new quantity is less than 1, it returns null to indicate that the product should be removed from the cart
          return { ...product, quantity: newQuantity }; // If the new quantity is valid, it returns a new product object with the updated quantity
        }
        return product;
      })
      .filter(Boolean); // Filters out any null values, effectively removing products with a quantity less than 1
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        totalToPay,
        showCart,
        setShowCart,
        showSnackBar,
        setShowSnackBar,
        snackBarMessage,
        setSnackBarMessage,
        openCartHandler,
        checkout,
        closeSnackBar,
        addToCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
