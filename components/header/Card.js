import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { useRouter } from "next/router";
import UserCard from "./UserCard";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import axios from "axios";

const styleTextWithIcon = {
  color: "FEFEFE",
  margin: 0,
  padding: 0,
  fontSize: "20px",
  lineHeight: "30px",
  marginLeft: "10px",
  fontWeight: 500,
};

export default function Card({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  data,
}) {
  return (
    <div>
      <Box sx={{ flexGrow: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="View User" sx={{ cursor: "pointer" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                variant="circle"
                alt={data.details.name + " " + data.details.surname}
                src={data.profile.exists ? data.profile.path : ""}
                sx={{
                  backgroundColor: "#002D62",
                  border: "2px solid #fff",
                  width: 45,
                  height: 45,
                }}
              />
            </IconButton>
          </Tooltip>
          <p className="poppins" style={styleTextWithIcon}>
            Hi {data.details.name + " " + data.details.surname}
          </p>
        </Box>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <UserCard data={data} />
        </Menu>
      </Box>
    </div>
  );
}
