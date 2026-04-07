import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Logo.module.scss";
import logo from "../../../assets/logo.png";
export default function Logo({ name }) {
  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={1} className={styles.logoContainer}>
        <Box component={"img"} src={logo} alt="Logo" className={styles.logoImage} />
        <h6 className={styles.logoText}>{name}</h6>
      </Box>
    </>
  );
}
