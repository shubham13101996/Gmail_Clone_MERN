import styled from "@emotion/styled";
import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const dialogStyle = {
  height: "95%",
  width: "80%",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px 10px 0 0",
  boxShadow: "none",
};

const Header = styled(Box)({
  display: "flex",
  padding: "10px 15px",
  justifyContent: "space-between",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

const RecipientWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    marginTop: 10,
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
  },
});

const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
});

const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  textTransform: "none",
  fontWeight: 500,
  width: 100,
  borderRadius: 18,
});
const ComposeMail = ({ openDialog, setOpenDialog }) => {
  const [data, setData] = useState({});

  const sentEmailService =  useApi(API_URLS.saveSentEmail)
  const config = {
    Host: process.env.REACT_APP_HOST,
    Username: process.env.REACT_APP_USERNAME,
    Password: process.env.REACT_APP_PASSWORD,
    port: process.env.REACT_APP_PORT,
  };
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "shubham.pathak926@gmail.com",
        Subject: data.subject,
        Body: data.body,
      })
        .then((message) => alert(message))
        .catch((err) => {
          console.log(err.message);
        });
    }

    const payload = {
to :data.to,
from: "shubham.pathak926@gmail",
subject : data.subject,
body:data.body,
data: new Date(),
image:"",
name:"master_shubham",
starred : false,
type:'sent',
    }
sentEmailService.call(payload)
if(!sentEmailService.error){
  setOpenDialog(false);
  setData({})
}else{
  
}
    setOpenDialog(false);
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyle }}>
      <Header>
        <Typography>New Message</Typography>
        <Close
          style={{ cursor: "pointer" }}
          fontSize="small"
          onClick={(e) => closeComposeMail(e)}
        />
      </Header>
      <RecipientWrapper>
        <InputBase
          placeholder="Recipients"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </RecipientWrapper>

      <TextField
        multiline
        rows={18}
        onChange={(e) => onValueChange(e)}
        name="body"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
      <Footer>
        <SendButton onClick={(e) => sendMail(e)}>Send</SendButton>
        <DeleteOutline
          onClick={() => setOpenDialog(false)}
          style={{ cursor: "pointer" }}
        />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
