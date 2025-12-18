import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/home/navBar/Navbar";
import HeroSection from "../../components/home/heroSection/HeroSection";

const Home = ({setmyMOde}) => {
  return (
    <Box>
      <Navbar setmyMOde={setmyMOde} />
      <HeroSection />
    </Box>
  );
};

export default Home;
