import { Users } from "../../dummyData";
const OnlineUsers = () => {
    const rightBarFriend = {
        display: "flex",
        alignItems: "center",
        marginBottom: "15px",
      };
      const rightBarProfilePicContainer = {
        marginRight: "10px",
        position: "relative",
      };
      const rightBarProfilePic = {
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        objectFit: "cover",
      };
      const onlineBadge = {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: "limegreen",
        position: "absolute",
        top: "-2px",
        right: 0,
        border: "2px solid white",
      };
      const rightBarUsername = {
        fontWeight: "500",
      };
  return (
    <div>
      {Users.map((item) => (
        <li style={rightBarFriend} key={item.id}>
          <div style={rightBarProfilePicContainer}>
            <img src={item.profilePicture} alt="" style={rightBarProfilePic} />
            <span style={onlineBadge}></span>
          </div>
          <span style={rightBarUsername}>{item.username}</span>
        </li>
      ))}
    </div>
  );
};
export default OnlineUsers;
