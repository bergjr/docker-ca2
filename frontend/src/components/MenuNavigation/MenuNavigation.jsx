import React from "react";
import styles from "./MenuNavigation.module.scss";
import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
export default function MenuNavigation() {
  return (
  <Container maxWidth="md">
    <Box component={"nav"} className={styles.navigation}>
      <ul>
        <li>
          <Link to={"/menu/pasta"}>Pasta</Link>
        </li>
        <li>
          <Link to={"/menu/burgers"}>Burgers</Link>
        </li>
        <li>
          <Link to={"/menu/pizzas"}>Pizza</Link>
        </li>
      </ul>
    </Box>
  </Container>
  );
}
