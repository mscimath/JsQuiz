const js_theory =  [
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
          ]

const js = [
    { questionLines: [
        {line: "Which of the following statements reads a number entered from the keyboard and stores it in an int variable x?"},
           ],
            answers : [ {text: "input x", correctness: false},
                              {text: "x = int(input())", correctness: true},
                              {text: "get_integer(&x)", correctness: false},
                              {text: "read(x)", correctness : false},
             ],
                            key: 1,
          },
           { questionLines: [ 
                    {line: "The purpose of the following (fragment) program is to calculate the sum of natural numbers from 1 to n:"},
                    {line: "sum = 0"}, 
                    {line: "for i in range(1, n+1):"},
                    {line: "	  ???"},
                    {line: "What should be put in place of the question marks for the program to fulfill its assumptions?"},
              ],
            answers : [ {text: "sum += 1 ", correctness: false},
                              {text: "sum = i", correctness: false},
                              {text: "sum += i", correctness: true},
                              {text: "sum = sum + 1", correctness : false},
                      {text: "sum + i", correctness: false},
                     ],
                            key: 2,
          },
        
          { questionLines: [ 
                    {line: "The purpose of the following (fragment) program is to calculate the number of ‘a’ letters in the word S:"},
                    {line: "how_many_a = 0"},
                    {line: "for i in range(len(S)):"},
                    {line: "	  if ???:"},
                    {line: "      how_many_a += 1"},
                    {line: "What should be put in place of the question marks for the program to fulfill its assumptions?"},
            ],
            answers : [ {text: "S == ‘a’", correctness: false},
                              {text: "S[i] == ‘a’", correctness: true},
                              {text: "i == ‘a’", correctness: false},
                              {text: "S[i] = ‘a’", correctness : false},
                     ],
                            key: 3,
          },
          { questionLines: [
                    {line: "The purpose of the following (fragment) program is to find the largest number in a five-element array:"},
                    {line: "maximum = 0"},
                    {line: "for i in range(5):"},
                    {line: "    if tab[i] > maximum:"},
                    {line: "        maximum = tab[i]"},
                    {line: "print(maximum)"},
                    {line: "For what data will the printed answer not be correct?"},
        ],
            answers : [ {text: "tab =  [14, 0, 5, 6, -2]", correctness: false},
                              {text: "tab = [0, -3, -2, 0, -5]", correctness: false},
                              {text: "tab = [7, -1, 9, -23, 1]", correctness: false},
                              {text: "tab = [3, 5, 1, 9, 2]", correctness : false},
                              {text: "tab = [-5, -4, -9, -8, -3]", correctness : true},
                     ],
                            key: 4,
                    solution: "The error is an invalid initial value for the maximum variable. If all numbers are less than 0, this variable will remain 0. An example fix could be to make the starting value smaller or even set it to the first element of the tab array.",
          },
        
]

const py = [
    {
        questionLines: [
            {line: "Which of the following statements reads a number entered from the keyboard and stores it in an int variable x?"},
        ],
        answers : [ 
            {text: "input x", correctness: false},
            {text: "x = int(input())", correctness: true},
            {text: "get_integer(&x)", correctness: false},
            {text: "read(x)", correctness : false},
        ],
        solution: "",
        key: 1,
    },
    { 
        questionLines: [ 
            {line: "The purpose of the following (fragment) program is to calculate the sum of natural numbers from 1 to n:"},
            {line: "sum = 0"}, 
            {line: "for i in range(1, n+1):"},
            {line: "	  ???"},
            {line: "What should be put in place of the question marks for the program to fulfill its assumptions?"},
        ],
        answers : [ 
            {text: "sum += 1 ", correctness: false},
            {text: "sum = i", correctness: false},
            {text: "sum += i", correctness: true},
            {text: "sum = sum + 1", correctness : false},
            {text: "sum + i", correctness: false},
        ],
        key: 2,
      },
      { questionLines: [ 
                {line: "The purpose of the following (fragment) program is to calculate the number of ‘a’ letters in the word S:"},
                {line: "how_many_a = 0"},
                {line: "for i in range(len(S)):"},
                {line: "	  if ???:"},
                {line: "      how_many_a += 1"},
                {line: "What should be put in place of the question marks for the program to fulfill its assumptions?"},
        ],
        answers : [ {text: "S == ‘a’", correctness: false},
                          {text: "S[i] == ‘a’", correctness: true},
                          {text: "i == ‘a’", correctness: false},
                          {text: "S[i] = ‘a’", correctness : false},
                 ],
                        key: 3,
      },
      { questionLines: [
                {line: "The purpose of the following (fragment) program is to find the largest number in a five-element array:"},
                {line: "maximum = 0"},
                {line: "for i in range(5):"},
                {line: "    if tab[i] > maximum:"},
                {line: "        maximum = tab[i]"},
                {line: "print(maximum)"},
                {line: "For what data will the printed answer not be correct?"},
    ],
        answers : [ {text: "tab =  [14, 0, 5, 6, -2]", correctness: false},
                          {text: "tab = [0, -3, -2, 0, -5]", correctness: false},
                          {text: "tab = [7, -1, 9, -23, 1]", correctness: false},
                          {text: "tab = [3, 5, 1, 9, 2]", correctness : false},
                          {text: "tab = [-5, -4, -9, -8, -3]", correctness : true},
                 ],
                        key: 4,
                solution: "The error is an invalid initial value for the maximum variable. If all numbers are less than 0, this variable will remain 0. An example fix could be to make the starting value smaller or even set it to the first element of the tab array.",
      },]
    

const py_theory =  [
                {
                    question: "PythonWhat does SCSS stand for?",
                    answers: [
                        { text: "Smart Cascading Style Sheets", correctness: false},
                        { text: "Sassy Colorful Smart Sheets", correctness: false},
                        { text: "Sassy Cascading Style Sheets", correctness: true},
                        { text: "Sleek Creative Smart Sheets", correctness: false},
                    ],
                    key: 1,
                },
                {
                    question: "PythonWhat will the following code produce: var a = 7*4; var b = a % 7; var c = a - b; document.writeln(c -= 6) ?",
                    answers: [
                        { text: 18, correctness: false},
                        { text: "Nothing", correctness: false},
                        { text: "Error", correctness: false},
                        { text: "22", correctness: true},
                    ],
                    key: 2,
                },
                {
                    question: "PythonWhat will this code produce: var str = 'JavaScript is great!'; document.write('<br>' + ((str.length - 10)*5 + 10) + '<br>'); ?",
                    answers: [
                        { text: "60", correctness: false},
                        { text: "60 surrounded by newlines.", correctness: false},
                        { text: "'60' surrounded by newlines.", correctness: true},
                        { text: "<br> 60 <br>", correctness: false},
                    ],
                    key: 3,
                },
                {
                    question: "PythonWhat is React.StrictMode?",
                    answers: [
                        { text: "Does not allow for the use of double equal sign (==).", correctness: false},
                        { text: "Highlights potential defects of the application after activating additional checks.", correctness: true},
                        { text: "It renders a Strict Component.", correctness: false},
                    ],
                    key: 4,

                },
                {
                    question: "PythonHow to create an object using the Object constructor?",
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
                    question: "PythonWhat is useReducer hook used for in React?",
                    answers: [
                        { text: "Smart Cascading Style Sheets", correctness: false},
                        { text: "Sassy Colorful Smart Sheets", correctness: false},
                        { text: "Sassy Cascading Style Sheets", correctness: true},
                        { text: "Sleek Creative Smart Sheets", correctness: false},
                    ],
                    key: 6,

                },
                {
                    question: "PythonWhat are 'reference values' in JavaScript?",
                    answers: [
                        { text: "Smart Cascading Style Sheets", correctness: false},
                        { text: "Sassy Colorful Smart Sheets", correctness: false},
                        { text: "Sassy Cascading Style Sheets", correctness: true},
                        { text: "Sleek Creative Smart Sheets", correctness: false},
                    ],
                    key: 7,

                },
      ]

const light = [
            {
                question: "What is the wavelength range of light?",
                answers: [
                    { text: "Infinite.", correctness: false},
                    { text: "380-780 nm is considered the widest range.", correctness: true},
                    { text: "Light has only one wavelength - 300nm.", correctness: false},
                    { text: "500-900mm", correctness: false},
                ],
                key: 1,
            },
            {
                question: "What is optical radiation?",
                answers: [
                    { text: "Scientific name for light.", correctness: false},
                    { text: "Low energy radiation produced by the eye organ.", correctness: false},
                    { text: "Scientific name for the 100nm - 1mm range  of electromagnetic radiation, subject to the laws of geometric and wave optics.", correctness: true},
                ],
                key: 2,
            },
            {
                question: "What is optical radiation divided into?",
                answers: [
                    { text: "ultraviolet, visible light and X-ray", correctness: false},
                    { text: "visible light, infrared and X-ray", correctness: false},
                    { text: "ultraviolet, visible light and infrared", correctness: true},
                    { text: "radio waves, visible light and infrared", correctness: false},
                ],
                key: 3,
            },
            {
                question: "Select whether the statement is correct: 'Wave-particle duality is a feature of quantum objects that manifests, depending on the situation, wave properties (diffraction, interference) or corpuscular properties (well-defined location, momentum).'",
                answers: [
                    { text: "Correct.", correctness: true},
                    { text: "Incorrect", correctness: false},
                ],
                key: 4,
            },
            {
                question: "What is the speed of light?",
                answers: [
                    { text: "299 792 458 km/h", correctness: false},
                    { text: "299 792 458 m/s", correctness: true},
                    { text: "300 000 km/h", correctness: false},
                    { text: "300 000 m/s", correctness: false},
                ],
                key: 5,
            },
            {
                question: "Select whether the statement is correct: 'Light is a common name for the visible to the human eye part of electromagnetic radiation.'",
                answers: [
                    { text: "true", correctness: true},
                    { text: "false", correctness: false},
                ],
                key: 6,

            },
            {
                question: "Is the following statement true: 'Light travels with the same speed in different media.'",
                answers: [
                    { text: "True", correctness: false},
                    { text: "False. Light travels faster in media other than vaccum.", correctness: false},
                    { text: "False. Light travels slower in media other than vacuum.", correctness: true},
                    { text: "500-900mm", correctness: false},
                ],
                key: 7,
            },
        ]

const light_easy = [
    {
        question: "What is the wavelength range of light?",
        answers: [
            { text: "Infinite.", correctness: false},
            { text: "380-780 nm is considered the widest range.", correctness: true},
            { text: "Light has only one wavelength - 300nm.", correctness: false},
            { text: "500-900mm", correctness: false},
        ],
        key: 1,
    },
    {
        question: "What is optical radiation?",
        answers: [
            { text: "Scientific name for light.", correctness: false},
            { text: "Low energy radiation produced by the eye organ.", correctness: false},
            { text: "Scientific name for the 100nm - 1mm range  of electromagnetic radiation, subject to the laws of geometric and wave optics.", correctness: true},
        ],
        key: 2,
    },
    {
        question: "What is optical radiation divided into?",
        answers: [
            { text: "ultraviolet, visible light and X-ray", correctness: false},
            { text: "visible light, infrared and X-ray", correctness: false},
            { text: "ultraviolet, visible light and infrared", correctness: true},
            { text: "radio waves, visible light and infrared", correctness: false},
        ],
        key: 3,
    },
    {
        question: "Select whether the statement is correct: 'Wave-particle duality is a feature of quantum objects that manifests, depending on the situation, wave properties (diffraction, interference) or corpuscular properties (well-defined location, momentum).'",
        answers: [
            { text: "Correct.", correctness: true},
            { text: "Incorrect", correctness: false},
        ],
        key: 4,
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "299 792 458 km/h", correctness: false},
            { text: "299 792 458 m/s", correctness: true},
            { text: "300 000 km/h", correctness: false},
            { text: "300 000 m/s", correctness: false},
        ],
        key: 5,
    },
    {
        question: "Select whether the statement is correct: 'Light is a common name for the visible to the human eye part of electromagnetic radiation.'",
        answers: [
            { text: "true", correctness: true},
            { text: "false", correctness: false},
        ],
        key: 6
    },
    {
        question: "Is the following statement true: 'Light travels with the same speed in different media.'",
        answers: [
            { text: "True", correctness: false},
            { text: "False. Light travels faster in media other than vaccum.", correctness: false},
            { text: "False. Light travels slower in media other than vacuum.", correctness: true},
            { text: "500-900mm", correctness: false},
        ],
        key: 7,
    },
]

export {js_theory, py_theory, py, js, light, light_easy}
