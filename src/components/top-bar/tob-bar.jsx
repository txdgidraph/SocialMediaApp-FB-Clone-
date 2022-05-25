import "./top-bar.css";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import { Grid } from "@material-ui/core";
const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topBarLeft">
        <span className="logo">MattaSocialApp</span>
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
          <input
            placeholder="Search for friends posts and videos"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLinks">Homepage</span>
          <span className="topBarLinks">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">34</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">34</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">34</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topBarProfilePic" />
      </div>
    </div>
  );
};
export default TopBar;
