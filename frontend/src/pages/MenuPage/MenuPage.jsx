import React, { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ListItems from "../../components/ListItems/ListItems";
import Product from "../../components/Product/Product";
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import { DUMMY_ITEMS } from "@/data/menuData";
import { useParams } from "react-router-dom";
import SearchBar from "@/components/SearchBar/SearchBar";
import { Box, Container } from "@mui/material";
import { getFullMenuByName } from "@/services/api";

export default function MenuPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { category } = useParams();
  
  // Guarantees that currentMenu is always in the correct format ("Pasta", "Burgers", "Pizza")
  const currentMenu = useMemo(() => {
    const name = category || "pasta";
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }, [category]);

  // Guarantees that menuData is always initialized with the correct structure
  const [menuData, setMenuData] = useState({ name: "", products: [] });

  useEffect(() => {
    // Prevents unnecessary API calls if the current menu is already loaded
    if (menuData.name === currentMenu) {
      return; 
    }

    const fetchMenuItems = async () => {
      try {
        console.log("🔥 Fazendo requisição para:", currentMenu);
        const response = await getFullMenuByName(currentMenu);
        
        // Handles both cases: when response is already the data or when it's wrapped in a "data" property
        const fetchedData = response.data || response; 
        
        setMenuData({
          name: fetchedData.name,
          products: fetchedData.products || []
        });
      } catch (error) {
        console.error("Failed to fetch menu items:", error);
      }
    };

    fetchMenuItems();
    
  }, [currentMenu, menuData.name]);

  const displayedItems = useMemo(() => {
    return menuData.products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, menuData.products]);

  return (
    <main style={{ marginTop: "130px" }}>
      <Container maxWidth="md" sx={{ marginBottom: "30px" }}>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <MenuNavigation />
          <SearchBar placeholder="Search" onSearch={setSearchTerm} />
          <Product />
          <ListItems items={displayedItems} />
        </Box>
      </Container>
    </main>
  );
}