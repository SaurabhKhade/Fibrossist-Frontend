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

const LoginButton = styled(Button)(() => ({
  color: "#000",
  backgroundColor: "#FCFFE7",
  fontWeight: "bold",
  textTransform: "capitalize",
  borderRadius: "5px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  width: "100px",
  height: "40px",
  fontFamily: "Sans-Serif",
  "&:hover": {
    backgroundColor: "#FCFFE7",
  },
}));

const styleTextWithIcon = {
  color: "FEFEFE",
  margin: 0,
  padding: 0,
  fontFamily: "sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  marginLeft: "10px",
};

const pages = [
  { name: "Home", path: "/dashboard/" },
  { name: "History", path: "/dashboard/history" },
  { name: "Contact Us", path: "/dashboard/#contact" },
  { name: "About Us", path: "/dashboard/about" },
  { name: "Settings", path: "/dashboard/settings" },
];

export default function NavigationBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // useEffect(() => {
  //   console.log(router.pathname);
  // }, [router]);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {
            <PageListSmallScreen
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          }
          {<PageList handleCloseNavMenu={handleCloseNavMenu} />}

          <Box sx={{ marginLeft: "auto" }}>
            {
              <UserAvatar
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
              />
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function UserAvatar({ handleOpenUserMenu, anchorElUser, handleCloseUserMenu }) {
  const router = useRouter();
  return (
    <>
      {router.pathname == "/" ? (
        <Link href="/login">
          <LoginButton>Login</LoginButton>
        </Link>
      ) : (
        <Card
          handleOpenUserMenu={handleOpenUserMenu}
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
        />
      )}
    </>
  );
}

function Card({ handleOpenUserMenu, anchorElUser, handleCloseUserMenu }) {
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Tooltip title="View User" sx={{ cursor: "pointer" }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                variant="circle"
                alt="Babaji Patil"
                src="/static/images/avatar/2.jpg"
                sx={{
                  backgroundColor: "#002D62",
                  border: "2px solid #fff",
                  width: 45,
                  height: 45,
                }}
              />
            </IconButton>
          </Tooltip>
          <p style={styleTextWithIcon}>Hi Babaji Patil</p>
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
          <UserCard />
        </Menu>
      </Box>
    </>
  );
}

function PageListSmallScreen({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) {
  return (
    <>
      <MedicalServicesIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "'Exo', sans-serif",
          fontWeight: 900,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Fibrossist
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page}>
              <Link href={page.path}>
                <Typography textAlign="center">{page.name}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

function PageList({ handleCloseNavMenu }) {
  const router = useRouter();
  return (
    <>
      <MedicalServicesIcon
        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
      />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "'Exo', sans-serif",
          fontWeight: 900,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Fibrossist
      </Typography>
      {router.pathname !== "/" && (
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex",
              justifyContent: "flex-end",
              paddingRight: "2rem",
              gap: "1rem",
              fontWeight: 600,
              // border: "1px solid red",
            },
          }}
        >
          {pages.map((page) => (
            <Link key={page} href={page.path}>
              {page.name}
            </Link>
          ))}
        </Box>
      )}
    </>
  );
}
