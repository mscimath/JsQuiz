import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header } from './components/Header';
import './App.css';
import {js_theory, js, py_theory, py, light, light_easy} from './data/questions';
import CodeQuiz from './components/CodeQuiz';
import TheoryQuiz from './components/TheoryQuiz';


export default function App() {
    const windowWidth = window.innerWidth;
    const height = window.innerHeight;
	return (
		<Router>
            <canvas style={{width : {windowWidth}, height: {height}}} id="background-canvas">
            </canvas>
            <Header className={"App-header"} />
            <div className='circle'></div>
            <div className="circle-one"></div>
            <div className="circle-two"></div>
            <div className="container">
            <div id="links">
                <Link className={"link"} to="/js_theory" >js quiz</Link>            
                <Link className={"link"} to="/py_theory">py quiz</Link>
                <Link className={"link"} to="/light">light quiz</Link>
                <Link className={"link"} to="/py_code">py code</Link>
            </div>
            <Routes>
                <Route path='/js' element={<TheoryQuiz questions={js} />}></Route>
                <Route path='/py' element={<TheoryQuiz questions={py_theory} />}></Route>
                <Route path='/light' element={<TheoryQuiz questions={light} />}></Route>
                <Route path='/py_code' element={<CodeQuiz questions={py} />}></Route>
            </Routes>
            </div>
        </Router>
	);
}

