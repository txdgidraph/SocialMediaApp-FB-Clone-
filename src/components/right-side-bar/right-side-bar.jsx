import "./right-side-bar.css";
import React from "react";
import OnlineUsers from "../online/online"
const RightSideBar = ({profile}) => {
  const rightSideBar = {
    margin: "10px",
  };
  const rightBarWrapper = {
    padding: "20px 20px 0 0",
  };
  const birthdayImage = {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  };
  const birthdayText = {
    fontWeight: 300,
    fonTSize: "50px",
  };
  const birthdayContainer = {
    display: "flex",
    alignItems: "center",
  };
  const rightBarAdd = {
    width: "100%",
    borderRadius: "10px",
    margin: "30px 0",
  };
  const rightBarFriendList = {
    padding: 0,
    margin: 0,
    listStyle: "none",
  };
  const HomePageightBar = () =>{
    return(
      <div>
      <div style={birthdayContainer}>
          <img src="/assets/gift.png" alt="" style={birthdayImage} />
          <span style={birthdayText}>
            <b>Karen Rangi</b> and <b>3 Other Friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" style={rightBarAdd} />
        <h4 className="rightBarTitle" style={{ marginBottom: "20px" }}>
          Friends Online
        </h4>
        <ul style={rightBarFriendList}>
          {/* ======== List Online Users Dynamically =============== s */}
          <OnlineUsers/>
        </ul>
        </div>
    )
  }
  const ProfilePageRightBar = () =>{
    return(
      <div>
       <h4 className="rightBarTitle">User information</h4>
       <div className="infoConatiner">
         <span className="rightBarInforKey">City</span>
         <span className="rightBarInforValue">New York</span>
       </div>
       <div className="infoConatiner">
         <span className="rightBarInforKey">From:</span>
         <span className="rightBarInforValue">Madrid</span>
       </div>
       <div className="infoConatiner">
         <span className="rightBarInforKey">Relationship</span>
         <span className="rightBarInforValue">Single</span>
       </div>
       <h4 className="rightBarTitle">User friends</h4>
       <div className="rightBarFollowings">
         <div className="rightBarFollowing">
           <img src="/assets/person/1.jpeg" alt="" className="rightBarFollowingImage" />
           <span className="rightBarFollowingName">John Carter</span>
         </div>
       </div>
      </div>
    )
  }
  return (
    <div style={rightSideBar}>
      <div style={rightBarWrapper}>
        <ProfilePageRightBar/>
      </div>
    </div>
  );
};
export default RightSideBar;
