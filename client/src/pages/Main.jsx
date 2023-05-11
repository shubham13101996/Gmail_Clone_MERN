import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };
  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar openDrawer={openDrawer} />
      <div>Display Mails</div>
    </div>
  );
};

export default Main;
