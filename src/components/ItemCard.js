import { Card, CardHeader, CardMedia, Paper } from "@mui/material";
import React from "react";

export default function ItemCard() {
  return (
    <>
      <Paper>
        <Card sx={{ display: 'flex' }}>
            <CardMedia src="https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png"></CardMedia>
            <CardHeader></CardHeader>
        </Card>
      </Paper>
    </>
  );
}
