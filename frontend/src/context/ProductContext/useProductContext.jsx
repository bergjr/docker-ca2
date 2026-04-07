import { useContext } from "react";
import ProductContext from "./ProductContext";

export default function useProductContext() {
  const context = useContext(ProductContext);
  return context;
}