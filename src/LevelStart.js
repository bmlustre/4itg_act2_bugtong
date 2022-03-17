import React, {Component} from "react";
import './css/LevelStart.css';
import isEmpty from "./utils/is-empty";
import logo from './imgfiles/logo.png';
import fail from './imgfiles/fail.png';
import success from './imgfiles/success.png';
import { useNavigate } from "react-router-dom";
import questions from "./questions.json";
import { Modal, Button } from "react-bootstrap";
import modalStyle from "./utils/modal-style";
class LevelStart extends Component {
  // const navigate = useNavigate();

  state = {
    questions,
    currentQuestion : [],
    nextQuestion : [],
    previousQuestion : [],
    answer: "",
    numberofQuestions: questions.length,
    numberofAnsweredQuestions: 0,
    currentQuestionIndex : 0,
    score: 0,
    correctAnswer : 0,
    wrongAnswer : 0,
    time: {},
    isOpen : false,
    popUpBg : ""
  };

  displayQuestion = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
      let {currentQuestionIndex} = this.state;
      if(!isEmpty(questions)) {
        if(questions.length !== currentQuestionIndex) {
          questions = this.state.questions;
          currentQuestion = questions[currentQuestionIndex];
          nextQuestion = questions[currentQuestionIndex +1];
          previousQuestion = questions[currentQuestionIndex -1];
          const answer = currentQuestion.answer;

          this.setState({
            currentQuestion ,
            nextQuestion,
            previousQuestion,
            answer
          });          
        } else {
          let passing = Math.ceil((questions.length / 2));
          let bg = fail;
            if(this.state.correctAnswer > passing )
              bg = success;
          this.setState({ isOpen: true , popUpBg : bg });
        }

      }
  };

  componentDidMount() {
    const {questions, currentQuestion, nextQuestion, previousQuestion} = this.state;
    this.displayQuestion(questions, currentQuestion, nextQuestion, previousQuestion);


  }

  handleOptionClick = (event) => {
    if(event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  }

  correctAnswer = () =>  {
    console.log("TAMA SAGOT");
    this.setState(prevState => ({
      score : prevState +1,
      correctAnswer : prevState.correctAnswer +1,
      currentQuestionIndex : prevState.currentQuestionIndex +1,
      numberofAnsweredQuestions : prevState.numberofAnsweredQuestions +1
    }), () => {
      this.displayQuestion ( this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
      
    });
  }

  wrongAnswer = () => {
    console.log("MALI SAGOT");
    this.setState(prevState => ({
      wrongAnswer : prevState.wrongAnswer +1,
      currentQuestionIndex : prevState.currentQuestionIndex +1,
      numberofAnsweredQuestions : prevState.numberofAnsweredQuestions +1
    }), () => {
      this.displayQuestion ( this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);

    });
  }

  closeModal = () => this.setState({ isOpen: false });
  render() {
    const {currentQuestion, numberofQuestions, currentQuestionIndex, isOpen, popUpBg } = this.state;
    
    return (
      <div className="container p-5 text-center" id="levelStart">
        <Modal show={isOpen} onClick={this.closeModal} style={modalStyle.modal}>
            <Modal.Body>{  
                      <img src={popUpBg} alt='logo-img' className='mb-2 img-fluid'/>
              } 
            
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary">Restart Game</Button>
            </Modal.Footer>
        </Modal>

        <button className="back-btn btn-lg" onClick={() => {  }}> Back To Start </button>
        <img src={logo} alt='logo-img' className='mb-2' id="logo_game" />
        <h2 id="level-num"> LEVEL 1 </h2>
       
        <div id="content_bg" > </div>
        <div className=" " id="content_question">
          <div className="col-lg-12 ">
            <p className=" h1 ml-0 mr-0 text_qst" > { currentQuestion.question}</p>
          </div>
          <div className="col-lg-12" id="btn_top">
            <hr className="w-50"></hr>
          <p className="text-warning ml-0 mr-0 " > QUESTION {(currentQuestionIndex + 1)} OF {numberofQuestions} </p>

            <div className="btn-group">
              <button onClick={this.handleOptionClick} type="button" className="btn btn-primary btn-question">{ currentQuestion.option1 }</button>
              <button  onClick={this.handleOptionClick} type="button" className="ml-5 btn btn-primary btn-question">{ currentQuestion.option2}</button>
            </div>
          </div>
          <div className="col-lg-12 mt-3">
            <div className="btn-group">
                <button  onClick={this.handleOptionClick} type="button" className="btn btn-primary btn-question">{ currentQuestion.option3}</button>
                <button  onClick={this.handleOptionClick} type="button" className="ml-5 btn btn-primary btn-question">{ currentQuestion.option4}</button>
              </div>
          </div>
        </div>
      </div>
    );  
  }

};

export default LevelStart;