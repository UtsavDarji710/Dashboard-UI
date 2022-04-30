import "./sidebar.css";
import "../topbar/topbar.css";
import {LineStyle,Timeline,TrendingUp,PermIdentity,Storefront,AttachMoney,BarChart,MailOutline,DynamicFeed,ChatBubbleOutline,WorkOutline,Report,Autorenew,ArrowForwardIos,
} from "@material-ui/icons";

import pic from "../images/das.png"
import pic1 from "../images/im2.png"
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <div className="topbarWrapperl">
        <div className="topLeft">
          <img src={pic} alt="not shown" className="topAvatar"></img>
          </div>
          <div className="topLeft">
          <Autorenew className="logo1"/>
        </div>
      </div>
      <div className="sidebarMenu">
        <div className="sidebarListDash">
        <img src={pic1} alt="" className="topAvatar1" />
            <div className="sidedash">
              <span className="sidebarprofilename">
              Minimal UI
              </span>
              <span className="sidebarprofiletitle">
              admin
              </span>
            </div>
        </div>
      </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
                <ArrowForwardIos className="sideArrow"/>
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
                <ArrowForwardIos className="sideArrow"/>
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
              <ArrowForwardIos className="sideArrow"/>
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
              <ArrowForwardIos className="sideArrow"/>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
              <ArrowForwardIos className="sideArrow"/>
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
              <ArrowForwardIos className="sideArrow"/>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
              <ArrowForwardIos className="sideArrow"/>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
              <ArrowForwardIos className="sideArrow"/>
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
              <ArrowForwardIos className="sideArrow"/>
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
              <ArrowForwardIos className="sideArrow"/>
            </li>
          </ul>
        </div>
      </div>
     </div>
  );
}
