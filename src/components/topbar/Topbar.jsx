import React from "react";
import "./topbar.css";
import pic1 from "../images/im2.png"
import "../sidebar/sidebar.css";
import { NotificationsNone, Language, Settings, Search } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapperl">
        <div className="topLeft">
          <Search/>
        </div> 
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={pic1} alt="" className="topAvatar" />
        </div>
        </div>
      </div>
  );
}
