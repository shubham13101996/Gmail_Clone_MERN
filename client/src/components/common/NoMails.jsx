import { Box, Divider, Typography, styled } from "@mui/material";
import React from "react";

const NoMails = ({ message }) => {
  const Component = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 50,
    opacity: 0.8,
    width: "100%",
  });

  const DividerWrapper = styled(Divider)({
    width: "100%",
    marginTop: 10,
  });
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <DividerWrapper />
    </Component>
  );
};

export default NoMails;
