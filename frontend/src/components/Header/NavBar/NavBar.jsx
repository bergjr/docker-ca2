import { Badge, Box, Container, IconButton, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import ButtonCustom from "../../utils/ButtonCustom/ButtonCustom";
import Logo from "../Logo/Logo";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext/useCartContext";

export default function NavBar() {
  const { cart, openCartHandler } = useCartContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <Container
          maxWidth="xxl"
          className={styles.navInner}
          sx={{
            py: { xs: "12px", md: "20px" },
            px: { xs: "12px", md: "16px" },
          }}
        >
          <Box className={styles.leftSection}>
            <IconButton
              className={styles.menuToggle}
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <CloseIcon htmlColor="white" /> : <MenuIcon htmlColor="white" />}
            </IconButton>

            <ul className={`${styles.navList} ${mobileMenuOpen ? styles.navListOpen : ""}`}>
              <li>
                <Link to={"/"} onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/menu"} onClick={closeMobileMenu}>
                  Menu
                </Link>
              </li>
              <li>
                <Link to={"/about"} onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>
            </ul>
          </Box>

          <Box className={styles.logoWrap}>
            <Link to={"/"} onClick={closeMobileMenu}>
              <Logo name="MIDNIGHT OIL" />
            </Link>
          </Box>

          <Box className={styles.actions}>
            <ButtonCustom
              component={Link}
              to="/account"
              startIcon={<AccountCircleIcon htmlColor="black" />}
              variant="contained"
              backgroundColor={styles.yellowButton}
              textColor="black"
              aria-label="Account"
            >
              {isMobile ? "" : "Account"}
            </ButtonCustom>

            <Badge badgeContent={cart.length} color="error">
              <ButtonCustom
                startIcon={<ShoppingCartIcon htmlColor="black" />}
                onClick={openCartHandler}
                variant="contained"
                backgroundColor={styles.yellowButton}
                textColor="black"
                aria-label="Open cart"
              >
                {isMobile ? "" : "Cart"}
              </ButtonCustom>
            </Badge>
          </Box>
        </Container>
      </nav>
    </>
  );
}
