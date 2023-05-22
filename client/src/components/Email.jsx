import React, { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { Box, Checkbox, List } from "@mui/material";
import { Calculate, DeleteOutline } from "@mui/icons-material";
import EmailView from "./EmailView";

const Email = () => {
  const { openDrawer } = useOutletContext();
  const { type } = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type]);
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }>
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}>
        <Checkbox size="small" />
        <DeleteOutline />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <EmailView key={email._id} email={email} />
        ))}
      </List>
    </Box>
  );
};

export default Email;
