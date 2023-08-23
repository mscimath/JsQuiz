import React, {useRef, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Header } from './components/Header';
import './App.css';
import {js_and_react, js, py_theory, py, light, light_easy, dual_nature_of_light, elements_of_special_relativity, nuclear_physics} from './data/questions';
import CodeQuiz from './components/CodeQuiz';
import TheoryQuiz from './components/TheoryQuiz';


export default function App() {
    /*Window Size*/
    const windowWidth = window.innerWidth;
    const height = window.innerHeight;

    /*Text Bubble Size*/
    const bubbleRef = useRef(null);
    
    useEffect(() => {
        refs.current.forEach((ref) => {
            if(ref) {
                const width = ref.offsetWidth;
                ref.style.height = `${width}px`;
            }
        });
    }, []);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; /*1*/
    const directs = ["light", "dual_nature_of_light", "elements_of_special_relativity", "nuclear_physics", "js", "light_easy", "js_and_react", "py_theory", "py"] /*3*/
    const refs = useRef([]); /*2*/

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
                {   
                    //produce links
                    arr.map((item, index) => {
                        //change the directs text into a readable one for display
                        var displayText = directs[index].split('_');
                        displayText = displayText.join(' ');

                        return (
                            <Link 
                            className={"link"}
                            key = {index}
                            ref = {(element) => {
                                refs.current[index] = element;
                            }} 
                            to = {'/' + directs[index]}
                            >{displayText}
                            </Link>
                        );
                    })
                }
           </div>
            <Routes>
                <Route path='/js_and_react' element={<TheoryQuiz questions={js_and_react} />}></Route>
                <Route path='/py_theory' element={<TheoryQuiz questions={py_theory} />}></Route>
                <Route path='/light' element={<TheoryQuiz questions={light} />}></Route>
                <Route path='/light_easy' element={<TheoryQuiz questions={light_easy} />}></Route>
                <Route path='/py_code' element={<CodeQuiz questions={py} />}></Route>
                <Route path='/js' element={<CodeQuiz questions={js}/>} ></Route>
                <Route path='/dual_nature_of_light' element={<TheoryQuiz questions={dual_nature_of_light} />} ></Route>
                <Route path='/elements_of_special_relativity' element = { <TheoryQuiz questions= {elements_of_special_relativity}/> }></Route>
                <Route path='/nuclear_physics' element = { <TheoryQuiz questions = {nuclear_physics} /> } ></Route>
            </Routes>
            </div>
        </Router>
	);
}

