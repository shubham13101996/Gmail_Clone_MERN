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
import React from "react";

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
  const closeComposeMail = (e) => {
    e.preventDefault();
    setOpenDialog(false);
  };

  const sendMail = () => {
    setOpenDialog(false);
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
        <InputBase placeholder="Recipients" />
        <InputBase placeholder="Subject" />
      </RecipientWrapper>

      <TextField
        multiline
        rows={18}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
      <Footer>
        <SendButton onClick={() => sendMail()}>Send</SendButton>
        <DeleteOutline
          onClick={() => setOpenDialog(false)}
          style={{ cursor: "pointer" }}
        />
      </Footer>
    </Dialog>
  );
};

export default ComposeMail;
