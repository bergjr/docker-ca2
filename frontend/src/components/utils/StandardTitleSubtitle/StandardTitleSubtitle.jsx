import { Box } from "@mui/material";
import React from "react";
import styles from "./StandardTitleSubtitle.module.scss";
export default function StandardTitleSubtitle({title, subText}) {
  return (
    <Box
      className={styles.textBox}
      flexGrow={2}
      display={"flex"}
      padding={3}
      maxWidth={"md"}
    >
      <h2>{title}</h2>
      <p>{subText}</p>
    </Box>
  );
}
