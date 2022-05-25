import "./share.css";

import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
const Share = () => {
  const shareContainer = {
    width: "100%",
    height: "170px",
    borderRadius: "10px",
    "&-webkit-box-shadow": "0px 0px 7px 0px rgba(0,0,0,0.17)",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.17)",
  };
  const shareWrapper = {
    padding: "10px",
  };
  const shareProfilePic = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
  };
  const shareTop = {
    display: "flex",
    alignItems: "center",
  };
  const shareInput = {
    border: "none",
    width: "100%",
  };
  const shareHRLine = {
    margin: "20px",
  };
  const shareBottom = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const shareOptionsContainer = {
    display: "flex",
  };
  const shareOptions = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginRight:"15px"
  };
  const shareIcon = {
    marginRight: "10px",
    fontSize: "18px",
  };
  const shareButton = {
      border:"none",
      padding:"7px",
      borderRadius:"5px",
      backgroundColor:"green",
      color:"white",
      cursor:"pointer",
      fontWeight:"500",
      marginRight:"20px"
  }
  return (
    <div style={shareContainer}>
      <div style={shareWrapper}>
        <div style={shareTop}>
          <img src="/assets/person/1.jpeg" alt="" style={shareProfilePic} />
          <input
            placeholder="what's in your mind?"
            style={shareInput}
            className="shareInput"
          />
        </div>
        <hr style={shareHRLine} />
        <div style={shareBottom}>
          <div style={shareOptionsContainer}>
            <div style={shareOptions}>
              <PermMedia htmlColor="tomato" style={shareIcon} />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div style={shareOptions}>
              <Label htmlColor="blue" style={shareIcon} />
              <span className="shareOptionText">Tag</span>
            </div>
            <div style={shareOptions}>
              <Room htmlColor="green" style={shareIcon} />
              <span className="shareOptionText">Location</span>
            </div>
            <div style={shareOptions}>
              <EmojiEmotions htmlColor="goldenrod" style={shareIcon} />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button style={shareButton}>Share Status</button>
        </div>
      </div>
    </div>
  );
};
export default Share;
