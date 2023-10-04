import {
  Box,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FormatPrice from "../helper/FormatPrice";

export default function ItemCard({ imageUrl, name, description, price }) {
  return (
    <>
      <Box sx={{flexGrow: 1}} display="flex" width="100vw" height="120" /* justifyContent={"center"} alignItems={"center"} */>
        <Paper elevation={0}>
          <Grid container spacing={2}>
            <Grid item xs={2} md={4} lg={4}>
              <Box
                component="img"
                sx={{
                  // height: 233,
                  // width: 350,
                  maxHeight: { xs: 480, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt={name}
                src={imageUrl}
              />
            </Grid>
            <Grid item xs={2} md={4} lg={4}>
              <Stack direction={"column"} spacing={2}>
                <Typography>{name}</Typography>
                <Typography>{description}</Typography>
              </Stack>
            </Grid>
            <Grid item xs={2} md={4} lg={4}>
              <Typography>{<FormatPrice price={price} />}</Typography>
            </Grid>
          </Grid>
          <Divider />
        </Paper>
      </Box>
    </>
  );
}
