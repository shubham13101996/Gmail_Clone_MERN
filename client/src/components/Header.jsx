import React from "react";

import { AppBar, Box, InputBase, Toolbar, styled } from "@mui/material";
import {
  AccountCircleOutlined,
  AppsOutlined,
  HelpOutlineOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  Tune,
} from "@mui/icons-material";
import { gmailLogo } from "./../constant/contants";

const StyledAppbar = styled(AppBar)({
  margin: "0 -7.5px",
  background: "#F5F5F5",
  boxShadow: "none",
});

const BoxWrapper = styled(Box)({
  background: "#EAF1FB",
  marginLeft: 80,
  borderRadius: 8,
  minWidth: 690,
  maxWidth: 720,
  display: "flex",
  alignItems: "center",
  height: 48,
  justifyContent: "space-between",
  padding: "0 20px",
  "  & > div ": {
    width: "100%",
    padding: "0 10px",
  },
});

const OptionWrapper = styled(Box)({
  display: "flex",
  justifyContent: "end",
  width: "100%",
  "& > svg ": {
    marginLeft: 20,
  },
});
const Header = ({ toggleDrawer }) => {
  return (
    <StyledAppbar position="static">
      <Toolbar>
        <MenuIcon
          style={{ cursor: "pointer" }}
          color="action"
          onClick={toggleDrawer}
        />
        <img
          src={gmailLogo}
          alt="GmailLogo"
          style={{ width: 110, marginLeft: 15 }}
        />
        <BoxWrapper>
          <Search color="action" />
          <InputBase placeholder="Search mail.." />
          <Tune color="action" />
        </BoxWrapper>
        <OptionWrapper>
          <HelpOutlineOutlined color="action" />
          <SettingsOutlined color="action" />
          <AppsOutlined color="action" />
          <AccountCircleOutlined color="action" />
        </OptionWrapper>
      </Toolbar>
    </StyledAppbar>
  );
};

export default Header;
