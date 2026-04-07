import { Box, Container } from "@mui/material";
import React from "react";
import styles from "./BannerSingleText.module.scss";

export default function BannerSingleText() {
  return (
    <section className={styles.bannerSingleText}>
      <Container maxWidth="xxl">
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"column"}
          padding={4}
        >
          <Box className={styles.titleBox}>
            <h1>Our Menu</h1>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
