import React from "react";
import styles from "./PopularDishes.module.scss";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import ButtonCustom from "../../utils/ButtonCustom/ButtonCustom";
import CardCustom from "../../CardCustom/CardCustom";
import { v4 as uuidv4 } from "uuid";
import raviolino from "@/assets/Dishes/Pasta/Raviolino.png";
import bolognese from "@/assets/Dishes/Pasta/Bolognese.png";
import bolinni from "@/assets/Dishes/Pasta/Bolinni.png";


export default function PopularDishes() {
  return (
    <section className={styles.popularDishes}>
      <Container
        maxWidth="xxl"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          paddingY: { xs: 5, md: 8 },
          paddingX: { xs: 2, md: 3 },
        }}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
        >
          <Typography variant="h2" component="h2">
            Popular Dishes
          </Typography>
          <Typography
            variant="body1"
            component="p"
            textAlign={"center"}
            maxWidth={"md"}
          >
            Discover the flavors our community loves most. From crisp, seasonal
            bowls to our chef’s signature creations, every dish is a fresh,
            handcrafted masterpiece made just for you.
          </Typography>
        </Box>
        <Box display={"flex"} flexWrap={"wrap"} gap={{ xs: 2, md: 4 }} justifyContent={"center"} width={"100%"}>
          <CardCustom
            id={uuidv4()}
            title="Raviolino"
            price="12.99"
            image={raviolino}
          />
          <CardCustom
            id={uuidv4()}
            title="Bolognese"
            price="10.99"
            image={bolognese}
          />
          <CardCustom
            id={uuidv4()}
            title="Bolinni"
            price="11.99"
            image={bolinni}
          />
        </Box>
      </Container>
    </section>
  );
}
