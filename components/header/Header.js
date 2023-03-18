import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import axios from "axios";
import { useRouter } from "next/router";

import UserAvatar from "./UserAvatar";
import { PageListSmallScreen, PageList } from "./PageList";
import getHost from "../../host";

export default function NavigationBar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const router = useRouter();
  const [data, setData] = useState({
    details: {
      name: "",
      surname: "",
      age: 0,
      email: "",
    },
    stats: {
      negative: 0,
      positive: 0,
    },
    profile: { exists: false },
  });

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

  // async function checkAPI() {
  //   console.log(data.data);
  // }

  useEffect(() => {
    let token = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];
    async function apiCall() {
      try {
        let { data } = await axios.get(`${getHost()}/details`, {
          headers: {
            token,
          },
        });
        console.log(data);
        setData(data);
      } catch {
        router.replace("/login");
      }
    }

    if (router.pathname !== "/") {
      if (token === null) {
        router.replace("/login");
      } else {
        apiCall();
      }
    }
  }, [router]);

  return (
    <AppBar position="sticky">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <PageListSmallScreen
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          <PageList handleCloseNavMenu={handleCloseNavMenu} />

          <Box sx={{ marginLeft: "auto" }}>
            {
              <UserAvatar
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                handleCloseUserMenu={handleCloseUserMenu}
                data={data}
              />
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
