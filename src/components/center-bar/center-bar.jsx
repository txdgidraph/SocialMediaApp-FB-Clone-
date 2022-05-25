import "./center-bar.css";
import Share from "../share/share";
import Post from "../post/post";
import {Posts} from "../../dummyData"
const CenterBar = () => {
  const centerBarStyles = {
    margin: "20px",
  }
  return (
    <div style={centerBarStyles}>
      <Share />
      {Posts.map((item) => (
        <Post post={item} key={item.id}/>
      ))}
      
    </div>
  );
};
export default CenterBar;
