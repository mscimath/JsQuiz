import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import {questions} from './data/questions';
import JsQuiz from './components/JsQuiz';


export default function App() {
    const windowWidth = window.innerWidth;
    const height = window.innerHeight;
	return (
		<Router>
            {/*<canvas style={{width : {windowWidth}, height: {height}}} id="background-canvas">
            </canvas>*/}
            <div className='circle'><br></br>width is {windowWidth}</div>
            <div className="circle-one">height is{height}</div>
            <div className="circle-two"></div>
            <Link to="/js">js</Link>
            <Routes>
                <Route path='/js' element={<JsQuiz questions={questions} />}>js quiz</Route>
            </Routes>
        </Router>
	);
}

