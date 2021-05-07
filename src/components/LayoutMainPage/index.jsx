import React from "react";
import Nav from "../Nav";

import "./LayoutMainPageStyles.scss";

const LayoutMainPage = ({ children }) => {
  return (
    <div className="layoutPage">
      <Nav />
      <div className="layoutPage__inner">{children}</div>
    </div>
  );
};

export default LayoutMainPage;
