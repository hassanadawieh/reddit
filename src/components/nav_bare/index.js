

import React from "react";
import "./index.css";
import SearchInput from "../../components/input/index";
import MainButton from "../../components/button/index";
import RedditLogo from "../../images/Reddit-logo.png";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const NavBare = () => {
  return (
    <div className="hole-header">
      <div className="section-container">
        <img className="logo-reddit" src={RedditLogo} alt="logo" />
        <div className="main-search">
          <SearchIcon/>
          <SearchInput />
        </div>
        <div className="action-header">
          <MainButton
            style={{
              backgroundColor: "var(--d)",
              color: "black",
              width: "130px",
              borderRadius: "var(--Radius)",
              height: "2rem"
            }}
          >
            <QrCodeScannerIcon />
            Get App
          </MainButton>
          <MainButton
            style={{
              backgroundColor: "#ff4500",
              color: "white",
              width: "130px",
              borderRadius: "var(--Radius)",
              height: "2rem"
            }}
          >
            {" "}
            log in{" "}
          </MainButton>
          <div >
            <PersonOutlineIcon />
            <KeyboardArrowDownIcon/>
            <div className="">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBare;