import React from "react";
import logo from './imgfiles/logo.png';
import './css/Start.css';
import { useNavigate } from "react-router-dom";

import road from './imgfiles/road.png';
import roundOne from './imgfiles/levels/roundOne.png';
import roundTwo from './imgfiles/levels/roundTwo.png';
import roundThree from './imgfiles/levels/roundThree.png';
import roundFour from './imgfiles/levels/roundFour.png';
import roundFive from './imgfiles/levels/roundFive.png';

const Start = () => {
  const navigate = useNavigate();
  return (
    <>    

    <div className="container-fluid startContainer">

      <div className="headerContainer row">
        <div className="col-lg-6">
          <img src={logo} alt='logo-img' className='side-logo' />
        </div>

        <div className="col-lg-6">
          <h1 className="back-link" onClick={() => {window.location.href="/Home"}}> HOME </h1>
        </div>
      </div>     

      <div className="levelsContainer row">
        <div className="col-lg">
          <img src={road} alt='road-img' className='road-img' />

          <img src={roundOne} alt='roundOne-img' className='round-one' onClick={() => {window.location.href="/LevelStart"}} />
          <img src={roundTwo} alt='roundTwo-img' className='round-two disabled-link' onClick={() => {window.location.href="/LevelStart"}} />
          <img src={roundThree} alt='roundThree-img' className='round-three disabled-link' onClick={() => {window.location.href="/LevelStart"}} />
          <img src={roundFour} alt='roundFour-img' className='round-four disabled-link' onClick={() => {window.location.href="/LevelStart"}} />
          <img src={roundFive} alt='roundFive-img' className='round-five disabled-link' onClick={() => {window.location.href="/LevelStart"}} />
        </div>
      </div>
    </div> 

    </>
  );
};

export default Start;