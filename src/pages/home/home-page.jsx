import "./home-page.css";
import TopBar from "../../components/top-bar/tob-bar";
import CenterBar from "../../components/center-bar/center-bar";
import LeftSideBar from "../../components/side-bar-left/side-bar-left";
import RightSideBar from "../../components/right-side-bar/right-side-bar";
import { Grid } from "@material-ui/core";
const HomePage = () => {
  const LeftBarStyles = {
    height: "100vh",
    padding: "20px",
    position: "sticky",
    top: "50px",
    overflowY: "scroll",
  };
  return (
    <div>
      <div className="homeConatiner">
        <TopBar />
        <Grid container spacing={0}>
          <Grid item md={3}>
            <div style={LeftBarStyles}>
              <LeftSideBar />
            </div>
          </Grid>
          <Grid item md={5}>
              <CenterBar />
          </Grid>
          <Grid item md={4}>
            <RightSideBar />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default HomePage;
