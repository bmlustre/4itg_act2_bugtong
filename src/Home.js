import React from "react";
import './css/Home.css';
import logo from './imgfiles/logo.png';
import jeep from './imgfiles/jeep.png';
import stamp from './imgfiles/stamp.png';
import tarsier from './imgfiles/tarsier.png';
import banner from './imgfiles/banner.png';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
    
      <div className="row container-fluid">
        <div className="col-lg-12">
          <img src={stamp} alt='stamp-img' className="stamp" />
          <img src={tarsier} alt='tarsier-img' className="tarsier" />
          <img src={banner} alt='banner-img' className="banner" />
          <img src={logo} alt='logo-img' className="logo" />
          <button className="btn" onClick={() => navigate("/Start")}>Click To Play</button>
          <img src={jeep} alt='jeep-img' className="jeep" />
        </div>
      </div>

  </>
  );
};

export default Home;