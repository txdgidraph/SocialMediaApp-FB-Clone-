import React from "react";
import { Users } from "../../dummyData";
const CloseFriends = () => {
    const sideBarFriends = {
        display: "flex",
        alignItems:"center",
        marginBottom:"15px",
    }
  const friendProfilePic={
      width:"32px",
      height:"32px",
      borderRadius:"50%",
      marginRight:"15px",
      objectFit:"cover",
  }
  return (
    <div>
      {Users.map((item) => (
        <li style={sideBarFriends} key={item.id}>
          <img src={item.profilePicture} alt="" style={friendProfilePic} />
          <span className="sideBarFriendname">{item.username}</span>
        </li>
      ))}
    </div>
  );
};
export default CloseFriends;
