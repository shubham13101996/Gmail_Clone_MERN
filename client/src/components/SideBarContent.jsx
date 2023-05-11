import styled from "@emotion/styled";
import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem } from "@mui/material";
import React from "react";
import { SIDEBAR_DATA } from "../config/sidebar.config";

const ComposeButtonWrapper = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  minWidth: 140,
  textTransform: "none",
  padding: 16,
  borderRadius: 16,
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
  },
  "& > ul > li >svg": {
    marginRight: 20,
  },
});
const SideBarContent = () => {
  return (
    <Container>
      <ComposeButtonWrapper>
        <CreateOutlined /> Compose
      </ComposeButtonWrapper>

      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItem>
            {" "}
            <data.icon fontSize="small" />
            {data.title}{" "}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SideBarContent;
