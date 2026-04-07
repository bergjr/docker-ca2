import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container maxWidth="xxl">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={"space-evenly"}
          padding={{ xs: 3, md: 8 }}
          gap={{ xs: 3, md: 5 }}
        >
          <Typography variant="h2" className={styles.email} align="center">
            noname@bestfoodintown.ie
          </Typography>
          <Box display="flex" justifyContent="space-between" gap={{ xs: 3, md: 5 }} flexWrap="wrap">
            <Box display={"flex"} flexDirection={"column"} gap={3} minWidth={{ xs: "100%", sm: 220 }}>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="h6" className={styles.yellow}>
                  Adress
                </Typography>
                <Typography variant="subtitle1" className={styles.primaryFont} align="left">
                  1234 Street Dublin, 12345
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" className={styles.yellow}>
                  Reservations
                </Typography>
                <Typography variant="subtitle1" className={styles.primaryFont}>
                  +1 (123) 456-7890
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={3} minWidth={{ xs: "100%", sm: 220 }}>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="h6" className={styles.yellow}>
                  Opening
                </Typography>
                <Typography variant="subtitle1" className={styles.primaryFont}>
                  Everyday - 1pm to 11pm
                </Typography>
              </Box>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={3} minWidth={{ xs: "100%", sm: 220 }}>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="h6" className={styles.yellow}>
                  General
                </Typography>
                <ul className={styles.footerLinks}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contactus">Contact Us</Link></li>
                </ul>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
