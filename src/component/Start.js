import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../css/Start.css';
import logo from '../imgfiles/logo.png';
import road from '../imgfiles/road.png';
import roundOne from '../imgfiles/levels/roundOne.png';
import roundTwo from '../imgfiles/levels/roundTwo.png';
import roundThree from '../imgfiles/levels/roundThree.png';
import roundFour from '../imgfiles/levels/roundFour.png';
import roundFive from '../imgfiles/levels/roundFive.png';
import question from '../imgfiles/question.png';
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const Start = () => {
  const location = useLocation();

  function isLinkDisabled(level) {
    if(!(location.state) ) {
      return "disabled-link";  
    }else  if((level > location.state.nextLevel))
    return "disabled-link";      
  }

  function getNextLevel() {
    
    if(location.state) 
        return (location.state.nextLevel)? location.state.nextLevel : 1;
    else return 1;
  }

  const [show, setShow] = useState(true);
  const handleShow = () => setShow(false);
  const showQ = () => setShow(true);

  return (
    <>    

    <div className="container-fluid startContainer">

    <Modal show={show}  >
      <Modal.Body> { 
        <p className="text-dark">
          Hello Kapitbahay! Inutusan ka ng nanay mo na bumili ng suka sa sari-sari store. 
          
          Sabi ni Aling Nena, kapag nasagot mo ang limang bugtong niya, bibigyan ka niya ng libreng load kasama ng suka mo. Kapag hindi naman, ay uuwi kang luhaan.
          Sa pag-uwi mo matapos bumili ng suka, nadaanan mo si mamang sorbetero. Tamang tama! Ang init ng panahon. Sabi niya, kapag nasagot mo ang limang bugtong niya, bibigyan ka niya ng libreng sorbetes, kahit anong flavor pa ang gusto mo! Ngunit kung hindi naman, ay uuwi kang pawisan.
            
          Katabi ng mamang sorbetero ang fishballan! Naku, parang bitin pa ang sorbetes, kaso wala ka nang pera. Sabi ni Mang Tomas, kapag nasagot mo raw ang limang bugtong niya, may limang tusok ng fishball ka! Kung hindi naman, ay uuwi kang gutom.
            
          Hay, nakakauhaw maglakad ‘no? May nadaanan kang panulak habang pauwi. Ito ang bukohan ni Ate Bebe. Sabi niya, kapag nasagot mo raw ang mga bugtong niya, bibigyan ka niya ng libreng buko! Ngunit kung hindi naman, ay uuwi kang uhaw.
            
          Matapos dumaan sa maraming tindahan, salamat naman, malapit ka na sa bahay niyo. Kaso wala kang pasalubong sa kapatid mo. May nadaanan kang nagtitinda ng Yakult, kaso wala ka nang natirang sukli. Sabi ni manong, kapag daw nasagot mo ang mga bugtong niya, may libreng yakult ka! Ngunit kung hindi naman, ay uuwi kang suka lang ang dala.
          
        </p>
        } 
        </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" className="btn-modal" onClick={handleShow} >Bumalik sa Mapa</Button> 
      </Modal.Footer>
  </Modal>

      <div className="headerContainer row">
        <div className="col-lg-6">
          <img src={logo} alt='logo-img' className='side-logo' />
        </div>

        <div className="col-lg-6">
          <div className="d-flex justify-content-end">
              <img src={question} alt='question-img' id="image-qst" onClick={showQ}/>
              <h1 className="ml-2 back-link" onClick={() => {window.location.href="/Home"}}> HOME </h1>            
          </div>

 
        </div>
      </div>     

      <div className="levelsContainer row">
        <div className="col-lg">
          <img src={road} alt='road-img' className='road-img' />
          <Link state={{ gameLevel: 1, nextLevel : getNextLevel()}} to="/Game" > 
            <img src={roundOne} alt='roundOne-img' className='round-one' />
          </Link>

          <Link state={{ gameLevel: 2 , nextLevel : getNextLevel()}} to="/Game" > 
            <img src={roundTwo} alt='roundTwo-img ' className={'round-two '+ isLinkDisabled(2)} />
          </Link>

          <Link state={{ gameLevel: 3 , nextLevel : getNextLevel()}} to="/Game" > 
            <img src={roundThree} alt='roundThree-img' className={'round-three ' + isLinkDisabled(3)} />
          </Link>

          <Link state={{ gameLevel: 4 , nextLevel : getNextLevel()}} to="/Game" > 
          <img src={roundFour} alt='roundFour-img' className={'round-four ' + isLinkDisabled(4)} />
          </Link>

          <Link state={{ gameLevel: 5 , nextLevel : getNextLevel()}} to="/Game" > 
            <img src={roundFive} alt='roundFive-img' className={'round-five '+ isLinkDisabled(5)} />

          </Link>

        </div>
      </div>
    </div> 

    </>
  );
};

export default Start;