import React from "react";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";

import "./NavStyles.scss";

const Nav = () => {
  const [show, setShow] = React.useState(false);

  const showHandler = () => {
    if (window.pageYOffset > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", showHandler);

    return () => {
      window.removeEventListener("scroll", showHandler);
    };
  }, []);

  return (
    <div className={`${show ? "nav nav-bg" : "nav"}`}>
      <img className="nav__logo" src={logo} alt="netflix-logo" />
      <img className="nav__account" src={account} alt="account-img" />
    </div>
  );
};

export default Nav;
