import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import {js, py, light} from './data/questions';
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
            
                <Link className={"link"} to="/js" >js quiz</Link>            
                <Link className={"link"} to="/py">py quiz</Link>
                <Link className={"link"} to="/light">light quiz</Link>
            <Routes>
                <Route path='/js' element={<JsQuiz questions={js} />}></Route>
                <Route path='/py' element={<JsQuiz questions={py} />}></Route>
                <Route path='/light' element={<JsQuiz questions={light} />}></Route>
            </Routes>
        </Router>
	);
}

