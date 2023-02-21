import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Link from "next/link";

import Card from "./Card";

const LoginButton = styled(Button)(() => ({
  color: "#000",
  backgroundColor: "#FCFFE7",
  fontWeight: "bold",
  textTransform: "capitalize",
  borderRadius: "5px",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  width: "100px",
  height: "40px",
  "&:hover": {
    backgroundColor: "#FCFFE7",
  },
}));

export default function UserAvatar({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
  data,
}) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    let value_or_null = (document.cookie.match(
      /^(?:.*;)?\s*token\s*=\s*([^;]+)(?:.*)?$/
    ) || [, null])[1];
    if (value_or_null === null) setIsLoggedIn(false);
    else setIsLoggedIn(true);

    // if()
  }, []);
  return (
    <>
      {router.pathname == "/" ? (
        isLoggedIn ? (
          <Link href="/dashboard">
            <LoginButton className="poppins">Dashboard</LoginButton>
          </Link>
        ) : (
          <Link href="/login">
            <LoginButton className="poppins">Login</LoginButton>
          </Link>
        )
      ) : (
        <Card
          handleOpenUserMenu={handleOpenUserMenu}
          anchorElUser={anchorElUser}
          handleCloseUserMenu={handleCloseUserMenu}
          data={data}
        />
      )}
    </>
  );
}
