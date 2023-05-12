import { Drawer } from "@mui/material";
import React from "react";
import SideBarContent from "./SideBarContent";

const Sidebar = ({ openDrawer }) => {
  return (
    <Drawer
      anchor="left"
      hideBackdrop={true}
      open={openDrawer}
      ModalProps={{
        keepMounted: true,
      }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#F5F5F5",
          borderRight: "none",
          height: "calc(100vh - 64px)",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default Sidebar;
