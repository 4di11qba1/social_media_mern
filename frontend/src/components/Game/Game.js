import GameAbout from "./GameAbout";
import GameHead from "./GameHead";
import GamePrice from "./GamePrice";
import Popular from "../Popular";
import GameRequirements from "./GameRequirements";
import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import AllRating from "./AllRating";
import CircularRating from "./CircularRating/CircularRating";

function Game({ windowWidth }) {
  const theme = useTheme();
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
        padding: "15px",
        paddingLeft: "80px",
      }}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <GameHead windowWidth={windowWidth} />

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexDirection: windowWidth < 700 && "column",
        }}
      >
        <GameAbout windowWidth={windowWidth} />
        <GamePrice windowWidth={windowWidth} />
      </div>

      <Divider flexItem />
      <Typography component="div" variant="h4" textAlign={"center"}>
        Rating
      </Typography>
      <Divider flexItem />
      <AllRating windowWidth={windowWidth} />
      <div style={{ display: "flex", padding: "15px", flexWrap: "wrap" }}>
        <CircularRating
          windowWidth={windowWidth}
          category={"User Ratings"}
          ratingValue={"85"}
        />
        <CircularRating
          windowWidth={windowWidth}
          category={"Overall Ratings"}
          ratingValue={"95"}
        />
      </div>

      <Divider flexItem />
      <Typography component="div" variant="h4" textAlign={"center"}>
        System Requirements
      </Typography>
      <Divider flexItem />
      <GameRequirements windowWidth={windowWidth} />

      <Divider flexItem />
      <Typography component="div" variant="h4" textAlign={"center"}>
        More Like This
      </Typography>
      <Divider flexItem />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {itemData.map((item, index) => {
          return <Popular key={index} item={item} />;
        })}
      </div>
    </Box>
  );
}

export default Game;

const itemData = [
  {
    img: "/img/games/honkai.png",
    title: "Honkai Impact Star Rail",
    desc: "Honkai: Star Rail is a role-playing gacha video game developed by miHoYo, published by miHoYo in mainland China and worldwide by Cognosphere, d/b/a HoYoverse.",
    price: "$44.99",
    genre: "Open World RPG",
    rating: "4.1",
  },
  {
    img: "/img/games/batman.png",
    title: "Batman Arkham Knight",
    desc: "Batman: Arkham Knight is a 2015 action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.",
    price: "$65.99",
    genre: "Open World RPG",
    rating: "4.9",
  },
  {
    img: "/img/games/codmw3.png",
    title: "Call of Duty Modern Warfare 3",
    desc: "A sequel to 2022 Modern Warfare II, serving as the third entry in the rebooted Modern Warfare sub-series and the twentieth installment in the overall Call of Duty series.",
    price: "$69.99",
    genre: "First Person Shooter",
    rating: "4.5",
  },
];
