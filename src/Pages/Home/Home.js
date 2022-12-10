import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Myproject from "../../Components/Myprojects/Myproject";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Myproject />
      <Footer />
    </div>
  );
};

export default Home;