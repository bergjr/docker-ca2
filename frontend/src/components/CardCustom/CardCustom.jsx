import { Box, Button, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import ButtonCustom from "../utils/ButtonCustom/ButtonCustom";
import useProductContext from "../../context/ProductContext/useProductContext";
import styles from "./CardCustom.module.scss";
export default function CardCustom({ id, title, price, image, category }) {
  const { setSelectedProduct, setShowProductModal } = useProductContext();

  const handleOpenModal = () => {
    setSelectedProduct({ id, title, price, image, category });
    setShowProductModal(true);
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 300 },
        maxWidth: 320,
        backgroundColor: "transparent",
      }}
      className={styles.card}
    >
      <Box className={styles.imageBox}>
        <img src={image} alt={title} />
      </Box>
      <CardContent>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={4}
          mb={2}
          className={styles.cardContent}
        >
          <h3>{title}</h3>
          <span className={styles.price}>${price}</span>
          <ButtonCustom
            variant="contained"
            backgroundColor="black"
            textColor="white"
            onClick={handleOpenModal}
          >
            Order Now
          </ButtonCustom>
        </Box>
      </CardContent>
    </Card>
  );
}
