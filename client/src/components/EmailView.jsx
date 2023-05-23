import styled from "@emotion/styled";
import { CheckBox, Star, StarBorder } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.urls";

const Wrapper = styled(Box)({
  padding: "0 0 0 10px",
  background: "#f2f6fc",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  "& > div": {
    display: "flex",
    width: "100%",
    "& > p": {
      fontSize: 14,
    },
  },
});

const Indicator = styled(Typography)({
  fontSize: "12px !important",
  background: "#ddd",
  color: "#222",
  padding: "0 4px",
  borderRadius: 4,
  marginRight: 6,
});

const Date = styled(Typography)({
  marginLeft: "auto",
  marginRight: 20,
  fontSize: 12,
  color: "#5F6368",
});
const EmailView = ({
  email,
  selectedEmails,
  setRefreshScreen,
  setSelectedEmails,
}) => {
  const navigate = useNavigate();

  const toggleStarredService = useApi(API_URLS.toggleStarredEmail);
  const togglestarredMail = () => {
    toggleStarredService.call({ id: email._id, value: !email.starred });

    setRefreshScreen((prevState) => !prevState);
  };

  const onValueChange = () => {
    if (selectedEmails.includes(email._id)) {
      setSelectedEmails((prevState) =>
        prevState.filter((id) => id != email_id)
      );
    } else {
      setSelectedEmails((prevState) => [...prevState, email._id]);
    }
  };
  return (
    <Wrapper>
      <CheckBox
        size="small"
        checked={selectedEmails.includes(email._id)}
        onChange={() => onValueChange()}
      />
      {email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: 10 }}
          color="#FFD700"
          onClick={() => {
            togglestarredMail();
          }}
        />
      ) : (
        <StarBorder
          onClick={() => {
            togglestarredMail();
          }}
          fontSize="small"
          style={{ marginRight: 10 }}
        />
      )}

      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}>
        <Typography style={{ width: 200, overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Indicator>Inbox</Indicator>

        <Typography>
          {email.subject}
          {email.body && "-"}
          {email.body}
        </Typography>
        <Date>
          {new window.Date(email.date).getDate()}
          {new window.Date(email.date).toLocaleString("default", {
            month: "long",
          })}
        </Date>
      </Box>
    </Wrapper>
  );
};

export default EmailView;
