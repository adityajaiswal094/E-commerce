import React from "react";

import { AppBar, Box, Button, Icon, Toolbar, Typography } from "@mui/material";

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

  const actions = [
    {
      icon: "shopping_cart",
      text: "Cart",
    },
    {
      icon: "account_circle",
      text: "",
    },
  ];

  return (
    <AppBar>
      <Toolbar>
        {/* title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          marginLeft={"1%"}
        >
          ShoppersStop
        </Typography>

        {/* action buttons */}
        <Box>
          {actions.map((action) => {
            return (
              <Button
                style={{ borderRadius: 10 }}
                startIcon={
                  <Icon
                    baseClassName="material-symbols-outlined"
                    style={{ fontSize: 24, color: "white" }}
                  >
                    {action.icon}
                  </Icon>
                }
              >
                <Typography style={{ fontSize: 18, color: "white" }}>
                  {action.text}
                </Typography>
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
