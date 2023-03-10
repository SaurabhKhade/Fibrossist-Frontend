import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import { useRouter } from "next/router";
import Link from "next/link";

const pointer = {
  cursor: "pointer",
};

const pages = [
  { name: "Home", path: "/dashboard/" },
  { name: "History", path: "/dashboard/history" },
  // { name: "Contact Us", path: "/dashboard/#contact" },
  // { name: "About Us", path: "/dashboard/about" },
  { name: "Settings", path: "/dashboard/settings" },
];

export function PageListSmallScreen({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}) {
  return (
    <>
      <MedicalServicesIcon
        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
      />
      <Link href="/">
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontWeight: 600,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
          className="poppins"
        >
          Fibrossist
        </Typography>
      </Link>

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
          {pages.map((page, i) => (
            <MenuItem
              key={page + i.toString() + "-small"}
              style={{ cursor: "pointer" }}
            >
              <Link href={page.path}>
                <Typography textAlign="center" className="poppins">
                  {page.name}
                </Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
}

export function PageList() {
  const router = useRouter();
  return (
    <>
      <MedicalServicesIcon
        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
      />
      <Link href="/">
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "'Exo', sans-serif",
            fontWeight: 600,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
          className="poppins"
        >
          Fibrossist
        </Typography>
      </Link>
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
            },
          }}
        >
          {pages.map((page, i) => (
            <Link key={page + i.toString() + "-big"} href={page.path}>
              <Typography
                textAlign="center"
                className="poppins"
                style={pointer}
              >
                {page.name}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </>
  );
}
