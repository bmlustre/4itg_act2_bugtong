import React from "react";
import '../css/Game.css';
import LevelStart from "./LevelStart";
import modalStyle from "../utils/modal-style";
import { Link, useLocation } from 'react-router-dom'
import { Button, Modal } from "react-bootstrap";
import lock from "../imgfiles/lock.png"

const Game = () => {
    const location = useLocation();
    function displayGame() {        
        if(!location.state.nextLevel && (location.state.gameLevel != 1)) {
            return showModal("ITO AY SARADO")
        } else if ( location.state.gameLevel > location.state.nextLevel ) {
            return showModal("ITO AY SARADO");
        } else {
            console.log("proceed");
            return <LevelStart  currentLevel={location.state.gameLevel}  />
        }     
    }

    function showModal(text) {
        console.log("halu")
       return ( <div className="container-fluid p-5 text-center" id="levelStart">
              <Modal show={true}  style={modalStyle.modal}>
                <Modal.Body> { <img alt='logo-img' src={lock} className='mb-2 img-fluid'/> } 
                 </Modal.Body>
                <Modal.Footer>
                    <Link state={{ currentLevel : location.state.gameLevel, nextLevel : location.state.nextLevel}} to="/Start" >
                    <Button variant="secondary" className="btn-modal" >Bumalik sa Mapa</Button> 
                    </Link>
                </Modal.Footer>
            </Modal>
             
       </div>
                 
       )
    
            
    }
  return (
    <>  {  displayGame() }
 </>
  );
};

export default Game;