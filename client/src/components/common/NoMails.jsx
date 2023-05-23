import { Box, Typography } from "@mui/material";
import React from "react";

const NoMails = ({ message }) => {
  return (
    <Box>
      <Typography>{message.heading}</Typography>
      <Typography>{message.heading}</Typography>
    </Box>
  );
};

export default NoMails;
