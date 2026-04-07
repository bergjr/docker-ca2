import React from "react";
import styles from "./ImgTextBox.module.scss";
import { Box, Container } from "@mui/material";
import dish from "../../assets/dish-main-page.png";
import StandardTitleSubtitle from "../utils/StandardTitleSubtitle/StandardTitleSubtitle";
export default function ImgTextBox({ title, subText }) {
  return (
    <>
    <Container maxWidth="xxl">
      <Box display={"flex"} padding={5} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
        <StandardTitleSubtitle title={title} subText={subText} />
        <Box
          className={styles.imgBox}
          flexGrow={1}
          display={"flex"}
          padding={3}
          sx={{ width: "100%", maxWidth: "100%" }}
          component={"img"}
          src={dish}
          alt="hero"
          style={{ width: "100%", height: "auto", objectFit: "contain", maxWidth: "100%" }}
        ></Box>   
      </Box>
    </Container>
    </>
  );
}
