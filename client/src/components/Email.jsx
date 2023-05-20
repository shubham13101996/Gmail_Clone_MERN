import React from "react";
import { useOutletContext } from "react-router-dom";

const Email = () => {
  const { openDrawer } = useOutletContext();
  return (
    <div
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }>
      hello from emails
    </div>
  );
};

export default Email;
