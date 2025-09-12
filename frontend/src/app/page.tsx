"use client"

import Link from "next/link";
import React from "react";
import Header from "../components/Header";
import { Container } from "./HomePage.style";
import CampaignList from "@/components/CampaignList";
import Navbar from "@/components/Navbar";
import { BackgroundDiv } from "./HomePage.style";

interface HomePageProps {
  children?: React.ReactNode;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Navbar/>
      <Container>
        <CampaignList/> 
      </Container>
    </>
  );
}
export default HomePage;
