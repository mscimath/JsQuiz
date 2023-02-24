import React, { useState } from 'react';
import './App.css';

export default function App() {
	const questions = [
        {
            question: "What does SCSS stand for?",
            answers: [
                { text: "Smart Cascading Style Sheets", correctness: false},
                { text: "Sassy Colorful Smart Sheets", correctness: false},
                { text: "Sassy Cascading Style Sheets", correctness: true},
                { text: "Sleek Creative Smart Sheets", correctness: false},
            ],
            key: 1,
        },
    
        {
            question: "What will the following code produce: var a = 7*4; var b = a % 7; var c = a - b; document.writeln(c -= 6) ?",
            answers: [
                { text: 18, correctness: false},
                { text: "Nothing", correctness: false},
                { text: "Error", correctness: false},
                { text: "22", correctness: true},
            ],
            key: 2,
        },
    
        {
            question: "What will this code produce: var str = 'JavaScript is great!'; document.write('<br>' + ((str.length - 10)*5 + 10) + '<br>'); ?",
            answers: [
                { text: "60", correctness: false},
                { text: "60 surrounded by newlines.", correctness: false},
                { text: "'60' surrounded by newlines.", correctness: true},
                { text: "<br> 60 <br>", correctness: false},
            ],
            key: 3,
        },
    
        {
            question: "What is React.StrictMode?",
            answers: [
                { text: "Does not allow for the use of double equal sign (==).", correctness: false},
                { text: "Highlights potential defects of the application after activating additional checks.", correctness: true},
                { text: "It renders a Strict Component.", correctness: false},
            ],
            key: 4,
            
        },
    
        {
            question: "How to create an object using the Object constructor?",
            answers: [
                { text: "function Character() {} Character.prototype.surname = 'Sponge'; var characterInstance = new Character();", correctness: false},
                { text: "var Character = {name: 'Bob', surname: 'Sponge'}",  correctness: false},
                { text: "var objectInstance = Object.create(null);", correctness: false},
                { text: "var objectInstance = new Object();", correctness: true}, 
                { text: "function Character(name) {this.name = name; this.surname = 'Sponge'} var characterInstance = new Character('Bobina');", correctness: false },           
            ],
            key: 5,
            
        },
    
        {
            question: "What is useReducer hook used for in React?",
            answers: [
                { text: "Smart Cascading Style Sheets", correctness: false},
                { text: "Sassy Colorful Smart Sheets", correctness: false},
                { text: "Sassy Cascading Style Sheets", correctness: true},
                { text: "Sleek Creative Smart Sheets", correctness: false},
            ],
            key: 6,
            
        },

        {
            question: "What are 'reference values' in JavaScript?",
            answers: [
                { text: "Smart Cascading Style Sheets", correctness: false},
                { text: "Sassy Colorful Smart Sheets", correctness: false},
                { text: "Sassy Cascading Style Sheets", correctness: true},
                { text: "Sleek Creative Smart Sheets", correctness: false},
            ],
            key: 7,
            
        },

        {
            question: "How to create an object with an object create method with a function prototype?",
            answers: [
                
            ],
            key: 8,
        },
    ];

    const shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());
    const quizQuestions = shuffledQuestions.slice(0, 2);

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

