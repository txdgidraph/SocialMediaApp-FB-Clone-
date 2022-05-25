import { Grid } from "@material-ui/core";
import "./profile.css";
import TopBar from "../../components/top-bar/tob-bar";
import LeftSideBar from "../../components/side-bar-left/side-bar-left";
import CenterBar from "../../components/center-bar/center-bar";
import RightSideBar from "../../components/right-side-bar/right-side-bar";
const ProfilePage = () => {
  const LeftBarStyles = {
    height: "100vh",
    padding: "20px",
    position: "sticky",
    top: "50px",
    overflowY: "scroll",
  };
  const CenterRightContainer = {
    display: "flex",
  };
  const coverImageContainer = {
      height:"320px",
      position:"relative",
      marginBottom:"50px"
  }
  const profileCoverImg = {
      width:"100%",
      height:"320px",
  }
  const profileUserImg ={
      width:"100px",
      height:"100px",
      borderRadius:"50%",
      position:"absolute",
      right:"45%",
      top:"260px",
      objectFit:"cover",
      border:"3px solid white"
  }
  return (
    <div>
      <TopBar />
      <Grid container spacing={2}>
        <Grid item md={3}>
          <div style={LeftBarStyles}>
            <LeftSideBar />
          </div>
        </Grid>
        <Grid item md={9}>
          <div style={coverImageContainer}>
              <div className="coverImages">
              <img
                style={profileCoverImg}
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                style={profileUserImg}
                src="assets/person/7.jpeg"
                alt=""
              />
              </div>
              <div className="coverInfo"></div>
          </div>
          <div style={CenterRightContainer}>
            <CenterBar />
            <RightSideBar profile/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProfilePage;
