import React, {Component} from "react";
import '../css/LevelStart.css';
import isEmpty from "../utils/is-empty";
import logo from '../imgfiles/logo.png';
import fail from '../imgfiles/fail.png';
import star from '../imgfiles/star.png';
import sun from '../imgfiles/sun.png';
import success from '../imgfiles/success.png';
import questionBG from '../imgfiles/questionBG.png';
import questions from "../questions.json";
import { Modal, Button } from "react-bootstrap";
import modalStyle from "../utils/modal-style";
import { Link } from "react-router-dom";

class LevelStart extends Component {

  state = {
    questions :questions[this.props.currentLevel -1],
    currentQuestion : [],
    nextQuestion : [],
    previousQuestion : [],
    answer: "",
    numberofQuestions: questions[this.props.currentLevel -1].length,
    numberofAnsweredQuestions: 0,
    currentQuestionIndex : 0,
    score: 0,
    correctAnswer : 0,
    wrongAnswer : 0,
    time: {},
    isOpen : false,
    popUpBg : "",
    currentLevel : this.props.currentLevel,
    nextLevel : this.props.currentLevel
};

  componentDidMount() {
    const {questions, currentQuestion, nextQuestion, previousQuestion} = this.state;
    this.displayQuestion(questions, currentQuestion, nextQuestion, previousQuestion);
  }

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
          let nextLevel = this.state.currentLevel;
            if(this.state.correctAnswer > 0 ) {
              bg = success;
              nextLevel ++;
            }
              
          this.setState({ isOpen: true , popUpBg : bg , nextLevel });
        }

      }
  };

  handleOptionClick = (event) => {
    if(event.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  }

  correctAnswer = () =>  {
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
    const {currentQuestion, numberofQuestions, currentQuestionIndex, isOpen, popUpBg, currentLevel, nextLevel  } = this.state;
    
    return (
      <div className="container-fluid p-5 text-center" id="levelStart">
        <Modal show={isOpen} onClick={this.closeModal} style={modalStyle.modal}>
            <Modal.Body> { <img src={popUpBg} alt='logo-img' className='mb-2 img-fluid'/> }  </Modal.Body>
              <Modal.Footer>
                <Link state={{ currentLevel, nextLevel }} to="/Start" >
                  <Button variant="secondary" className="btn-modal">Bumalik sa Mapa</Button> 
                </Link>
              </Modal.Footer>
        </Modal>

        <img src={sun} alt='logo-img' id="sun-img" />
        <Link state={{ currentLevel, nextLevel }} to="/Start" >
          <h1 className="back-link"> BACK </h1>
        </Link>

        <img src={logo} alt='logo-img' className='mb-2' id="logo_game" />
        
        <h2 id="level-num"> LEVEL {currentLevel} </h2>

        <img src={star} alt='star-img' className="star-three" />
        <img src={star} alt='star-img' className="star-four" />
       
        <div className="row" id="content_question">
          <div className="col-lg-12 ">
            <p className=" h1 ml-0 mr-0 text_qst" > {currentQuestion.question}</p>
            <hr className="w-50"></hr>
          <p className="text-warning ml-0 mr-0 " > QUESTION {(currentQuestionIndex + 1)} OF {numberofQuestions} </p>

          </div>
          <div className="col-lg-12" id="btn_top">
            <div className="btn-group">
              <button onClick={this.handleOptionClick} type="button" className="btn btn-primary btn-question">{ currentQuestion.option1 }</button>
              <button  onClick={this.handleOptionClick} type="button" className="ml-5 btn btn-primary btn-question">{ currentQuestion.option2}</button>
            </div>
          </div>
          <div className="col-lg-12 mt-3 footer">
            <div className="btn-group">
                <button  onClick={this.handleOptionClick} type="button" className="btn btn-primary btn-question">{ currentQuestion.option3}</button>
                <button  onClick={this.handleOptionClick} type="button" className="ml-5 btn btn-primary btn-question">{ currentQuestion.option4}</button>
              </div>
          </div>
          <img src={questionBG} alt='question-bg' className="question-bg" />
        </div>
      </div>
      
    );  
  }

};
export default LevelStart;