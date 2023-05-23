import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";
import { Box, Checkbox, List } from "@mui/material";
import { Calculate, DeleteOutline } from "@mui/icons-material";
import EmailView from "./EmailView";
import { API_URLS } from "./../services/api.urls";
import NoMails from "./common/NoMails";
import { EMPTY_TABS } from "../constant/contants";
const Email = () => {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);
  const { openDrawer } = useOutletContext();
  const { type } = useParams();
  const getEmailsService = useApi(API_URLS.getEmailFromType);
  const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin);
  const deleteMailsService = useApi(API_URLS.deleteEmails);
  useEffect(() => {
    getEmailsService.call({}, type);
  }, [type, refreshScreen]);

  const selectAllEmails = (e) => {
    if (e.target.checked) {
      const emails = getEmailsService?.response?.map((email) => email._id);
      setSelectedEmails(emails);
    } else {
      setSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = () => {
    if (type === "bin") {
      deleteMailsService.call(selectedEmails);
    } else {
      moveEmailsToBinService.call(selectedEmails);
    }

    setRefreshScreen((prevState) => !prevState);
  };
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
        <Checkbox size="small" onChange={(e) => selectAllEmails(e)} />
        <DeleteOutline
          onClick={(e) => {
            deleteSelectedEmails(e);
          }}
        />
      </Box>
      <List>
        {getEmailsService?.response?.map((email) => (
          <EmailView
            key={email._id}
            email={email}
            selectedEmails={selectedEmails}
            setRefreshScreen={setRefreshScreen}
            setSelectedEmails={setSelectedEmails}
          />
        ))}
      </List>

      {getEmailsService?.response?.length === 0 && (
        <NoMails message={EMPTY_TABS[type]} />
      )}
    </Box>
  );
};

export default Email;
