import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Alert, Snackbar } from "@mui/material";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export default function Standard() {
  const { showSnackBar, closeSnackBar, snackBarMessage } = useCartContext();

  return (
    <>
      <Header />
      <main style={{ marginTop: "80px" }}>
        <Outlet />
        <Snackbar
          open={showSnackBar}
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={closeSnackBar}
        >
          <Alert
            variant="filled"
            severity="success"
          >
            {snackBarMessage}
          </Alert>
        </Snackbar>
      </main>
      <ScrollRestoration />
      <Footer />
    </>
  );
}
