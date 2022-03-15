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

    <div className="headerContainer">
      <img src={logo} alt='logo-img' className='side-logo' />
      <button className="back-btn" onClick={() => navigate(-1)}> Back To Start </button>

    </div>      

      <div className="levelsContainer">
        <img src={road} alt='road-img' className='road-img' />

        <img src={roundOne} alt='roundOne-img' className='round-one' onClick={() => navigate("/LevelStart")} />
        <img src={roundTwo} alt='roundTwo-img' className='round-two disabled-link' onClick={() => navigate("/LevelStart")} />
        <img src={roundThree} alt='roundThree-img' className='round-three disabled-link' onClick={() => navigate("/LevelStart")} />
        <img src={roundFour} alt='roundFour-img' className='round-four disabled-link' onClick={() => navigate("/LevelStart")} />
        <img src={roundFive} alt='roundFive-img' className='round-five disabled-link' onClick={() => navigate("/LevelStart")} />
      </div>

      <div className="mechanicsContainer">
        <h2> Game Mechanics: </h2>
        <p> There are five rounds in total. Each round, you will be given 5 riddles to answer, before you can unlock your next destination. </p>
        <ol>
          <li> The first round is a sari-sari store. </li>
          <li> The second round will initiate at the sorbetes stand. </li>
          <li> The third round will start at the fishball stand. </li>
          <li> The fourth round will begin at the buko juice stand. </li>
          <li> Your last destination will be a yakult stand. </li>
        </ol>
        <p> Enjoy the game! </p>

      </div>
      
    </>
  );
};

export default Start;