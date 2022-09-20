import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.jsx' 
import Nested from './nested.jsx' 

var container = document.getElementById('task'); 

ReactDOM.render(<App><Nested /></App>, container); 