import React from "react";
import PeopleIcon from '@mui/icons-material/People';
import { Link } from "react-router-dom";
import { darkTheme } from "../Theme";
import { IconButton } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <IconButton><PeopleIcon sx={{color: darkTheme.palette.text.primary}} /></IconButton>
      </Link>
      <Link to="../chat">
        <IconButton><ChatIcon sx={{color: darkTheme.palette.text.primary}} /></IconButton>
      </Link>
    </div>
  );
};

export default NavIcons;
