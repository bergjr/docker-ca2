import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../utils/ButtonCustom/ButtonCustom";
import { useNavigate } from "react-router-dom";
import styles from "./CardWithLink.module.scss";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export default function CardWithLink({ title, alt, link, image }) {
  const navigate = useNavigate();
  return (
    <Box className={styles.card} onClick={() => navigate(link)}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={2}
        alignItems={"flex-start"}
        padding={2}
        className={styles.cardContent}
      >
        <Box sx={{ width: "100%", height: "80%" }}>
          <Box
            sx={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "100%",
              width: "100%",
              backgroundPosition: "center",
            }}
            aria-label={alt}
          />
        </Box>
        <Box className={styles.titleBox}>
          <ArrowOutwardIcon sx={{ color: "black" }} />
          <Typography variant="h5" className={styles.title}>
            {title}
          </Typography>
        </Box>
        {/* <CardContent>
        <Box display={"flex"} flexDirection={"column"} gap={2} alignItems={"center"}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
          <ButtonCustom variant="outlined" backgroundColor="black" textColor="white"  onClick={() => navigate(link)}>See More</ButtonCustom>
        </Box>
      </CardContent> */}
      </Box>
    </Box>
  );
}
