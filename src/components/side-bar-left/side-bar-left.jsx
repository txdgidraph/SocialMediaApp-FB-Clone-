import "./side-bar-left.css";
import CloseFriends from "../close-friends/close-friends";
import React from "react";
import {
  RssFeed,
  Chat,
  Bookmark,
  Work,
  Event,
  School,
  PlayCircleFilledOutlined,
  PeopleRounded,
  HelpOutline,
} from "@material-ui/icons";

const LeftSideBar = () => {

  const sideBarListStyles = {
    padding: 0,
    margin: 0,
    listStyle: "none",
  };
  const SideBarButtonStyle={
      width:"150px",
      border:"none",
      padding:"10px",
      borderRadius:"5px",
      cursor:"pointer",
      fontWeight:"500"
  }
  const HrLineStyles ={
      margin:"20px 0"
  }
  const SideBarFriendList = {
      padding:0,
      margin:0,
      listStyle:"none"
  }
  return (
    <div className="leftSideBar">
      <ul className="sideBarList" style={sideBarListStyles}>
        <li className="sideBarItem">
          <RssFeed className="sidebarIcon" />
          <span className="sideBarItemtext">Feed</span>
        </li>
        <li className="sideBarItem">
          <Chat className="sidebarIcon" />
          <span className="sideBarItemtext">Chats</span>
        </li>
        <li className="sideBarItem">
          <PlayCircleFilledOutlined className="sidebarIcon" />
          <span className="sideBarItemtext">Videos</span>
        </li>
        <li className="sideBarItem">
          <PeopleRounded className="sidebarIcon" />
          <span className="sideBarItemtext">Groups</span>
        </li>
        <li className="sideBarItem">
          <Bookmark className="sidebarIcon" />
          <span className="sideBarItemtext">Bookmarks</span>
        </li>
        <li className="sideBarItem">
          <HelpOutline className="sidebarIcon" />
          <span className="sideBarItemtext">Questions</span>
        </li>
        <li className="sideBarItem">
          <Work className="sidebarIcon" />
          <span className="sideBarItemtext">Jobs</span>
        </li>
        <li className="sideBarItem">
          <Event className="sidebarIcon" />
          <span className="sideBarItemtext">Events</span>
        </li>
        <li className="sideBarItem">
          <School className="sidebarIcon" />
          <span className="sideBarItemtext">Courses</span>
        </li>
      </ul>
      <button style={SideBarButtonStyle}>Show More</button>
      <hr style={HrLineStyles}/>
      <ul style={SideBarFriendList}>
       {/* =========== List Close Friends Dynamically ============== */}
       <CloseFriends/>
      </ul>
    </div>
  );
};
export default LeftSideBar;
