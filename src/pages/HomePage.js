import React from "react";

// import {
//   AppBar,
//   Box,
//   Button,
//   Icon,
//   Toolbar,
//   Typography,
// } from "@mui/material";

import ItemCard from "../components/ItemCard";
import Appbar from "../components/Appbar";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Box sx={boxStyle}>
        {/* appbar */}
        <Appbar />

        {/* body */}
        <ItemCard />
      </Box>
    </>
  );
}

const boxStyle = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "white",
};
