import React, { useState} from 'react';
import {questions} from './data/questions'
import JsQuiz from './components/JsQuiz';

import './App.css';

export default function App() {

	return (
		<>
            <JsQuiz questions = {questions}/>
        </>
	);
}

