import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Bannar from "../Bannar/Bannar";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Services></Services>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
