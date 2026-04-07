import React from "react";
import { Menu, MenuItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./MyAccount.module.scss";

export default function MyAccount({ open, onClose, onLogout }) {
  return (
    <Menu
      anchorEl={open}
      open={Boolean(open)}
      onClose={onClose}
      PaperProps={{
        className: "my-account-menu",
        sx: {
          minWidth: 200,
        },
      }}
    >
     
      <MenuItem
        component={Link}
        to="/account"
        onClick={onClose}
      >
        <ListItemIcon>
          <DashboardIcon fontSize="small" color="primary" />
        </ListItemIcon>
        <Typography sx={{ color: "black" }}>My Account</Typography>
      </MenuItem>
      <MenuItem onClick={onLogout}>
        <ListItemIcon>
          <ExitToAppIcon fontSize="small" color="error" />
        </ListItemIcon>
        <Typography sx={{ color: "black" }}>Logout</Typography>
      </MenuItem>
    </Menu>
  );
}
