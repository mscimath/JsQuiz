import './../App.css';
import React, { useState} from 'react';

function JsQuiz({questions}){

    const shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());
    const quizQuestions = shuffledQuestions.slice(0, 5);

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    {/* create a button that resets the quiz and create
    a place to hold user's scores and display them somewhere on the page*/}
    const scores = []

    const changeQuestion = (correctness) => {
        if(correctness === true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        
        if(nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div className='app'>
			
			{showScore ? (
				<div className='score-section'>You scored { score } out of {quizQuestions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
						</div>
						<div className='question-text'>
                            { quizQuestions[currentQuestion].question }
                        </div>
					</div>
                    
					<div className='answer-section'>
						{quizQuestions[currentQuestion].answers.map((answer, index) => 
                        <button onClick={() => changeQuestion(answer.correctness)} key = {index}>{answer.text}</button>)}
					</div>
				</>
			)}
		</div>
    );
}

export default JsQuiz;