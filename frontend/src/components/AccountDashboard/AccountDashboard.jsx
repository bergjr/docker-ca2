import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import "./AccountDashboard.module.scss";

export default function AccountDashboard() {
  const navigate = useNavigate();
  const dashboardRef = useRef(null);

  const handleClose = () => navigate(-1);

  const handleBackdropClick = (e) => {
    if (dashboardRef.current && !dashboardRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const orders = [
    { id: "ORD-001", total: 45.99, status: "Delivered" },
    { id: "ORD-002", total: 32.50, status: "Processing" },
  ];

  const savedItems = [
    { id: 1, name: "Burger", price: 12.99 },
    { id: 2, name: "Pizza", price: 14.99 },
  ];

  return (
    <Box
      className="account-dashboard"
      onClick={handleBackdropClick}
      sx={{ pt: "100px" }}
    >
      <Container maxWidth="md" ref={dashboardRef}>
        <Card className="account-card" sx={{ position: "relative", backgroundColor: '#292E38'}}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 16, right: 16, color: 'white' }}>
            <CloseIcon />
          </IconButton>
          <CardContent>
            <Typography variant="h4" fontWeight="bold">
              Account Dashboard
            </Typography>
            <Typography>Browse your recent orders and saved items.</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                component={Link}
                to="/menupage"
                sx={{
                  mt: 2,
                  width: "fit-content",
                  minWidth: "160px",
                  px: 4,
                }}
              >
                Browse Menu
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card className="account-card" sx={{ mt: 3, backgroundColor: '#292E38' }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Order History
            </Typography>
            <Divider sx={{ my: 2 }} />

            {orders.length === 0 ? (
              <Typography>No orders yet</Typography>
            ) : (
              orders.map((order) => (
                <Box key={order.id} className="order-item">
                  <Typography fontWeight="bold">{order.id}</Typography>
                  <Typography>${order.total}</Typography>
                  <Typography>{order.status}</Typography>
                </Box>
              ))
            )}
          </CardContent>
        </Card>

        <Card className="account-card" sx={{ mt: 3, backgroundColor: '#292E38'}}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              Added to Cart
            </Typography>
            <Divider sx={{ my: 2 }} />

            {savedItems.length === 0 ? (
              <Typography>No saved items</Typography>
            ) : (
              savedItems.map((item) => (
                <Box key={item.id} className="saved-item">
                  <Typography>{item.name}</Typography>
                  <Typography>${item.price}</Typography>
                </Box>
              ))
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
