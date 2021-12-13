import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Particles from "react-particles-js";
import Footer from "./Footer"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Footer/>
      <Particles
  params={{
    particles: {
      color: {
        value: "#FFFF"
      },
      line_linked: {
        color: {
          value: "#FFFF"
        }
      },
      number: {
        value: 30
      },
      size: {
        value: 3
      }
    }
  }}
/>
    </>
  );
};

export default Home;
