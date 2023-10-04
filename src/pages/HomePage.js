import React from "react";

// import {
//   AppBar,
//   Box,
//   Button,
//   Icon,
//   Toolbar,
//   Typography,
// } from "@mui/material";

import Appbar from "../components/Appbar";
import { Box } from "@mui/material";
import ItemList from "../components/ItemList";

export default function HomePage() {
  return (
    <>
      <Box sx={boxStyle}>
        {/* body */}
        <ItemList />
      </Box>
    </>
  );
}

const boxStyle = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
};
