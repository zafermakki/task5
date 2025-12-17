import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../components/home/navBar/Navbar";
import HeroSection from "../../components/home/heroSection/HeroSection";
import Features from "../../components/home/features/Features";

const Home = ({setmyMOde}) => {
  return (
    <Box>
      <Navbar setmyMOde={setmyMOde} />
      <HeroSection />
      <Features />
    </Box>
  );
};

export default Home;
