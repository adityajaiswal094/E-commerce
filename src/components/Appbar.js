import React from "react";

import {
  Box,
  Button,
  Icon,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import AppLogo from "../images/flipkart.svg";

export default function Appbar() {
  //   const [containedButton, setContainedButton] = useState(false);

  //   const containedButtonHandler = () => {
  //     setContainedButton(true);
  //   };

  //   const menuItemList = [
  //     {
  //       icon: "home",
  //       text: "Home",
  //     },
  //     {
  //       icon: "account_circle",
  //       text: "Profile",
  //     },
  //     {
  //       icon: "",
  //       text: "Orders",
  //     },
  //   ];

  return (
    <MainHeader>
      <Box component="div" sx={{ flexGrow: 1 }}>
        <NavLink to="/">
          <img src={AppLogo} alt="logo" /* width={100} height={60} */ />
        </NavLink>
      </Box>

      <Box>
        <Button
          className="profile-button"
          style={{ borderRadius: 10 }}
          startIcon={
            <Icon
              className="button-content"
              baseClassName="material-symbols-outlined"
              style={{ fontSize: 22 }}
            >
              account_circle
            </Icon>
          }
        >
          <Typography className="button-content" style={{ fontSize: 15 }}>
            User
          </Typography>
          <Icon className="button-content">expand_more</Icon>
        </Button>
      </Box>
    </MainHeader>
  );
}

const MainHeader = styled.section`
  padding: 0 3.6rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: spacebetween;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }

  .profile-button {
    background-color: ${({ theme }) => theme.colors.white};
    &:hover,
      &:active {
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.black}; 
        margin: -1px;
      };

    .button-content {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

/*

<AppBar position="sticky" >
    //   <Toolbar>
    //     {/* title */
//     <Box component="div" sx={{ flexGrow: 1 }} marginLeft={"1%"}>
//     {/* <NavLink to="/"> */}
//       <Typography variant="h6">ShoppersStop</Typography>
//     {/* </NavLink> */}
//     </Box>

//     {/* action buttons */}
//     {/* profile */}
// <Box>
//   <Button
//     style={{ borderRadius: 10 }}
//     startIcon={
//       <Icon
//         baseClassName="material-symbols-outlined"
//         style={{ fontSize: 22, color: "white" }}
//       >
//         account_circle
//       </Icon>
//     }
//   >
//     <Typography style={{ fontSize: 15, color: "white" }}>
//       User
//     </Typography>
//   </Button>
// </Box>
//   </Toolbar>
// </AppBar>
