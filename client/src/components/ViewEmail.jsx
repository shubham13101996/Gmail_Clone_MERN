import { ArrowBack, Delete } from "@mui/icons-material";
import { Box, Typography, styled, typographyClasses } from "@mui/material";
import React from "react";
import { useLocation, useOutletContext } from "react-router-dom";
import { emptyProfilePic } from "../constant/contants";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const IconWrapper = styled(Box)({
  padding: 15,
});

const Subject = styled(Typography)({
  fontSize: 22,
  margin: "10px 0 20px 75px",
  display: "flex",
});

const Indicator = styled(Box)({
  fontSize: 12,
  background: "#ddd",
  color: "#222",
  padding: "2px 4px",
  marginLeft: 6,
  borderRadius: 4,
  alignSelf: "center",
});
const Container = styled(Box)({
  marginLeft: 15,
  width: "100%",
  "& > div": {
    display: "flex",
    "& > p > span": {
      fontSize: 12,
      color: "#5E5E5E",
    },
  },
});

const Image = styled("img")({
  borderRadius: "50%",
  width: 40,
  height: 40,
  margin: "5px 10px 0 10px",
  backgroundColor: "#cccccc",
});

const Date = styled(Box)({
  color: "#5E5E5E",
  fontSize: 13,
  margin: "50px 0 auto !important",
});

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  const { state } = useLocation();
  const { email } = state;

  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);

  const deleteEmail = () => {
    moveEmailsToBinService.call([email._id]);
    window.history.back();
  };
  return (
    <Box style={openDrawer ? { marginLeft: 250 } : { width: "100%" }}>
      <IconWrapper>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          fontSize="small"
        />
        <Delete
          fontSize="small"
          color="action"
          style={{ marginLeft: 40 }}
          onClick={() => {
            deleteEmail();
          }}
        />
      </IconWrapper>

      <Subject>
        {email.subject}
        <Indicator component="span">Inbox</Indicator>
      </Subject>

      <Box style={{ display: "flex" }}>
        <Image src={emptyProfilePic} alt="dp" />
        <Container>
          <Box>
            <Typography>
              {email.name}
              <Box component="span">&nbsp;&#60;{email.to}&#62;</Box>
            </Typography>
            <Date>
              {new window.Date(email.date).getDate()}&nbsp;
              {new window.Date(email.date).toLocaleString("default", {
                month: "long",
              })}
              &nbsp;
              {new window.Date(email.date).getFullYear()}
            </Date>
          </Box>
          <Typography style={{ marginTop: 20 }}>{email.body}</Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default ViewEmail;
