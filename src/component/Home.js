import React from "react";
import '../css/Home.css';
import logo from '../imgfiles/logo.png';
import jeep from '../imgfiles/jeep.png';
import star from '../imgfiles/star.png';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home-container container-fluid">
      <div className="row ">
          <img src={logo} alt='logo-img' className="logo" />
            <h1 className="play-link" onClick={() => navigate("/Start")}> - CLICK TO PLAY - </h1>
          <img src={jeep} alt='jeep-img' className="jeep" />
          <img src={star} alt='star-img' className="star-one" />
          <img src={star} alt='star-img' className="star-two" />
      </div>
    </div>
  </>
  );
};

export default Home;