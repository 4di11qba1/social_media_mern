import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import RightSide from "../../components/RightSide/RightSide";
import "./Profile.css";
import { Box } from "@mui/material";
import { darkTheme } from "../../components/Theme";
const Profile = () => {
  return (
    <Box className="Profile" sx={{backgroundColor: darkTheme.palette.background.default}}>
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location = 'profilePage'/>
      <PostSide/>
      </div>
      <RightSide/>
    </Box>
  );
};

export default Profile;
