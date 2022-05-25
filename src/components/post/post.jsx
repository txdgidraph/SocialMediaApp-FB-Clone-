import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData"
import { useState } from "react";
const Post = ({post}) => {
  const postContainer = {
    width: "100%",
    "&-webkit-box-shadow": "0px 0px 7px 0px rgba(0,0,0,0.17)",
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.17)",
    marginTop: "10px",
    borderRadius: "10px",
  };
  const postWrapper = {
    padding: "10px",
  };
  const postTop = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const postTopLeft = {
    display: "flex",
    alignItems: "center",
  };
  const postProfilePic = {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "10px",
  };
  const postUserName = {
    fontSize: "15px",
    fontWeight: "500",
    margin: "0px 10px",
  };
  const postDate = {
    fontSize: "12px",
  };
  const postCenter = {
    margin: "20px 0",
  };
  const postImage = {
    marginTop: "20px",
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
  };
  const postBottom = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const postBottomLeft = {
    display: "flex",
    alignItems: "center",
  };
  const likeIcon = {
    width:"24px",
    height:"24px",
    marginRight:"5px",
    cursor:"pointer"
  }
  const likeCounter = {
      fontSize:"15px",
  }
  const postCommentText = {
      cursor:"pointer",
      borderBottom:"1px dashed gray",
      fontSize:"15px",
  }
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const likeHandler = () =>{
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div style={postContainer}>
      <div style={postWrapper}>
        {/* ========== Post Top ========= */}
        <div style={postTop}>
          <div style={postTopLeft}>
            <img src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" style={postProfilePic} />
            <span style={postUserName}>{Users.filter(u => u.id === post.userId)[0].username}</span>
            <span style={postDate}>{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        {/* ========== Post Center ========= */}
        <div style={postCenter}>
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" style={postImage} />
        </div>
        {/* ========== Post Bottom ========= */}
        <div style={postBottom}>
          <div style={postBottomLeft}>
            <img src="/assets/like.png" alt="" style={likeIcon} onClick={likeHandler}/>
            <img src="/assets/heart.png" alt="" style={likeIcon} onClick={likeHandler}/>
            <span style={likeCounter}>{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span style={postCommentText}>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
