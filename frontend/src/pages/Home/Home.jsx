import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Header/Banner/Banner";
import PopularDishes from "../../components/Main/PopularDishes/PopularDishes";
import MenuCards from "../../components/Main/MenuCards/MenuCards";
import Footer from "../../components/Footer/Footer";
import Product from "../../components/Product/Product";
import { Snackbar } from "@mui/material";

export default function Home() {
  return (
    <>
      <main style={{ marginTop: "80px" }}>
        <Banner />
        <PopularDishes />
        <Product />
        <MenuCards title="Try Our Menu" subText="Discover a curated selection of seasonal flavors crafted with the finest local ingredients. From signature classics to bold new creations, every dish is an invitation to savor the extraordinary.Explore our delicious offerings" />
      </main>
    </>
  );
}
