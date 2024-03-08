import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import "./Home.css";
import { Box } from "@mui/material";
import { darkTheme } from "../components/Theme";
const Home = () => {
  return (
    <>
      <Box className="Home" sx={{backgroundColor: darkTheme.palette.background.default, marginLeft: '64px'}}>
        <ProfileSide/>
        <PostSide />
        <RightSide />
      </Box>
    </>
  );
};

export default Home;
